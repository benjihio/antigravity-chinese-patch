const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const os = require('os');
const readline = require('readline');
const crypto = require('crypto');

const TEMP_DIR_NAME = 'antigravity_temp_unpack';
const BACKUP_DIR_NAME = 'antigravity-chinese-patch-backups';
const PATCH_START_MARKER = '// ANTIGRAVITY_ZH_PATCH_V2_START';
const PATCH_END_MARKER = '// ANTIGRAVITY_ZH_PATCH_V2_END';
const LEGACY_PATCH_MARKER = '// Antigravity 2.0 Claude Font and Chinese Interface Hack';

const colors = {
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    cyan: (text) => `\x1b[36m${text}\x1b[0m`,
};

function logInfo(msg) {
    console.log(`${colors.cyan('[信息]')} ${msg}`);
}

function logSuccess(msg) {
    console.log(`${colors.green('[成功]')} ${msg}`);
}

function logWarn(msg) {
    console.log(`${colors.yellow('[警告]')} ${msg}`);
}

function logError(msg) {
    console.log(`${colors.red('[错误]')} ${msg}`);
}

function parseArgs(argv) {
    const args = {
        asarPath: '',
        dryRun: false,
        restore: false,
        noSign: false,
        force: false,
        help: false,
    };

    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (arg === '--asar') {
            args.asarPath = argv[++i] || '';
        } else if (arg.startsWith('--asar=')) {
            args.asarPath = arg.slice('--asar='.length);
        } else if (arg === '--dry-run') {
            args.dryRun = true;
        } else if (arg === '--restore') {
            args.restore = true;
        } else if (arg === '--no-sign') {
            args.noSign = true;
        } else if (arg === '--force') {
            args.force = true;
        } else if (arg === '--help' || arg === '-h') {
            args.help = true;
        } else {
            logWarn(`忽略未知参数: ${arg}`);
        }
    }

    return args;
}

function printHelp() {
    console.log(`
Antigravity 客户端汉化补丁工具

用法:
  node localize.js
  node localize.js --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
  node localize.js --restore

参数:
  --asar <path>   指定 app.asar 路径，跳过默认路径探测
  --dry-run       只检查路径和将要执行的动作，不写入应用
  --restore       从最近一次版本化备份恢复 app.asar 和 app.asar.unpacked
  --no-sign       macOS 下跳过 codesign 重签名
  --force         重新替换已存在的旧补丁
  -h, --help      显示帮助
`);
}

function npxCommand() {
    return os.platform() === 'win32' ? 'npx.cmd' : 'npx';
}

function run(command, args, options = {}) {
    execFileSync(command, args, {
        stdio: options.stdio || 'inherit',
        cwd: options.cwd || process.cwd(),
    });
}

function runAsar(args, options = {}) {
    run(npxCommand(), ['--yes', 'asar', ...args], options);
}

function getDefaultAsarPath() {
    const platform = os.platform();
    if (platform === 'darwin') {
        return '/Applications/Antigravity.app/Contents/Resources/app.asar';
    }
    if (platform === 'win32') {
        const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
        return path.join(localAppData, 'Programs', 'antigravity', 'resources', 'app.asar');
    }
    return '';
}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans.trim());
    }));
}

function cleanInputPath(inputPath) {
    let cleanedPath = inputPath.trim().replace(/^['"]|['"]$/g, '');
    if (os.platform() !== 'win32') {
        cleanedPath = cleanedPath.replace(/\\ /g, ' ');
    }
    return cleanedPath;
}

async function resolveAsarPath(cliPath) {
    if (cliPath) {
        return normalizeAsarPath(cleanInputPath(cliPath));
    }

    let asarPath = getDefaultAsarPath();
    if (asarPath && fs.existsSync(asarPath)) {
        logInfo('检测到默认安装路径的 app.asar:');
        console.log(`   -> ${colors.green(asarPath)}`);
        const confirmDefault = await askQuestion('是否使用此默认路径？(Y/n): ');
        if (confirmDefault.toLowerCase() === 'n') {
            asarPath = '';
        }
    } else {
        logWarn('未在默认安装位置找到 Antigravity 客户端。');
        asarPath = '';
    }

    while (!asarPath || !fs.existsSync(asarPath)) {
        console.log('\n请输入或直接拖拽您的 Antigravity app.asar 文件路径：');
        console.log(colors.yellow('提示: macOS 通常位于 /Applications/Antigravity.app/Contents/Resources/app.asar'));
        console.log(colors.yellow('      Windows 通常位于 AppData\\Local\\Programs\\antigravity\\resources\\app.asar'));

        const inputPath = await askQuestion('> ');
        if (!inputPath) {
            logError('路径不能为空，请重新输入。');
            continue;
        }

        const cleanedPath = normalizeAsarPath(cleanInputPath(inputPath));
        if (fs.existsSync(cleanedPath)) {
            asarPath = cleanedPath;
        } else {
            logError(`文件路径不存在: "${cleanedPath}"，请确认后重新输入。`);
        }
    }

    return asarPath;
}

function normalizeAsarPath(inputPath) {
    if (!inputPath || !fs.existsSync(inputPath)) {
        return inputPath;
    }

    if (fs.statSync(inputPath).isDirectory()) {
        const checkAsar = os.platform() === 'darwin'
            ? path.join(inputPath, 'Contents', 'Resources', 'app.asar')
            : path.join(inputPath, 'resources', 'app.asar');
        if (fs.existsSync(checkAsar)) {
            return checkAsar;
        }
    }

    return inputPath;
}

function ensureAsarPath(asarPath) {
    if (!asarPath || !fs.existsSync(asarPath)) {
        throw new Error(`app.asar 不存在: ${asarPath}`);
    }
    if (fs.statSync(asarPath).isDirectory()) {
        throw new Error(`目标不是 app.asar 文件: ${asarPath}`);
    }
    if (path.basename(asarPath) !== 'app.asar') {
        logWarn(`目标文件名不是 app.asar: ${asarPath}`);
    }
}

function hashFile(filePath) {
    const hash = crypto.createHash('sha256');
    const data = fs.readFileSync(filePath);
    hash.update(data);
    return hash.digest('hex');
}

function copyDirSync(source, target) {
    fs.cpSync(source, target, {
        recursive: true,
        force: true,
        errorOnExist: false,
    });
}

function getSidecarPath(asarPath) {
    return `${asarPath}.unpacked`;
}

function timestampForPath() {
    return new Date().toISOString().replace(/[:.]/g, '-');
}

function createBackup(asarPath, dryRun) {
    const asarDir = path.dirname(asarPath);
    const backupRoot = path.join(asarDir, BACKUP_DIR_NAME);
    const backupDir = path.join(backupRoot, timestampForPath());
    const sidecarPath = getSidecarPath(asarPath);

    if (dryRun) {
        logInfo(`[dry-run] 将创建版本化备份: ${backupDir}`);
        return null;
    }

    fs.mkdirSync(backupDir, { recursive: true });
    fs.copyFileSync(asarPath, path.join(backupDir, 'app.asar'));

    const hasSidecar = fs.existsSync(sidecarPath);
    if (hasSidecar) {
        copyDirSync(sidecarPath, path.join(backupDir, 'app.asar.unpacked'));
    }

    const metadata = {
        createdAt: new Date().toISOString(),
        platform: os.platform(),
        asarPath,
        asarSha256: hashFile(asarPath),
        hasSidecar,
        toolVersion: 2,
    };
    fs.writeFileSync(path.join(backupDir, 'metadata.json'), JSON.stringify(metadata, null, 2), 'utf8');
    logSuccess(`已创建版本化备份: ${backupDir}`);
    return backupDir;
}

function findLatestBackup(asarPath) {
    const backupRoot = path.join(path.dirname(asarPath), BACKUP_DIR_NAME);
    if (!fs.existsSync(backupRoot)) {
        return '';
    }

    const candidates = fs.readdirSync(backupRoot)
        .map(name => path.join(backupRoot, name))
        .filter(candidate => fs.existsSync(path.join(candidate, 'app.asar')) && fs.statSync(candidate).isDirectory())
        .sort();
    return candidates[candidates.length - 1] || '';
}

function restoreLatestBackup(asarPath, dryRun) {
    const backupDir = findLatestBackup(asarPath);
    const sidecarPath = getSidecarPath(asarPath);

    if (!backupDir) {
        const legacyBackup = path.join(path.dirname(asarPath), 'app.asar.bak');
        if (fs.existsSync(legacyBackup)) {
            logWarn('未找到版本化备份，只发现旧式 app.asar.bak。旧式备份没有 app.asar.unpacked，恢复可能不完整。');
            if (!dryRun) {
                fs.copyFileSync(legacyBackup, asarPath);
            }
            return legacyBackup;
        }
        throw new Error(`未找到可恢复的备份目录: ${path.join(path.dirname(asarPath), BACKUP_DIR_NAME)}`);
    }

    logInfo(`准备恢复备份: ${backupDir}`);
    if (dryRun) {
        logInfo(`[dry-run] 将恢复 ${path.join(backupDir, 'app.asar')}`);
        return backupDir;
    }

    fs.copyFileSync(path.join(backupDir, 'app.asar'), asarPath);

    const backupSidecar = path.join(backupDir, 'app.asar.unpacked');
    if (fs.existsSync(backupSidecar)) {
        fs.rmSync(sidecarPath, { recursive: true, force: true });
        copyDirSync(backupSidecar, sidecarPath);
    } else if (fs.existsSync(sidecarPath)) {
        fs.rmSync(sidecarPath, { recursive: true, force: true });
    }

    logSuccess('已从版本化备份恢复 app.asar 和 app.asar.unpacked。');
    return backupDir;
}

function stripExistingPatch(content) {
    const start = content.indexOf(PATCH_START_MARKER);
    const end = content.indexOf(PATCH_END_MARKER);
    if (start !== -1 && end !== -1 && end > start) {
        return {
            content: `${content.slice(0, start).trimEnd()}\n`,
            stripped: true,
            kind: 'v2',
        };
    }

    const legacyStart = content.indexOf(LEGACY_PATCH_MARKER);
    if (legacyStart !== -1) {
        return {
            content: `${content.slice(0, legacyStart).trimEnd()}\n`,
            stripped: true,
            kind: 'legacy',
        };
    }

    return {
        content,
        stripped: false,
        kind: '',
    };
}

function injectPreload(tempUnpackDir, force) {
    const preloadJsPath = path.join(tempUnpackDir, 'dist', 'preload.js');
    const hackPreloadSourcePath = path.join(__dirname, 'hack_preload.js');

    if (!fs.existsSync(preloadJsPath)) {
        throw new Error(`解包包体中未找到预加载脚本: ${preloadJsPath}`);
    }
    if (!fs.existsSync(hackPreloadSourcePath)) {
        throw new Error('汉化补丁源文件 hack_preload.js 丢失。');
    }

    const originalPreloadContent = fs.readFileSync(preloadJsPath, 'utf8');
    const stripped = stripExistingPatch(originalPreloadContent);
    if (stripped.stripped) {
        logInfo(`检测到已存在的 ${stripped.kind} 补丁，将先移除旧补丁再注入。`);
    }

    if (!force && stripped.stripped && stripped.kind === 'v2') {
        logInfo('当前包已经是 v2 补丁格式；仍会用本地 hack_preload.js 重新覆盖，确保补丁为最新版本。');
    }

    const hackContent = fs.readFileSync(hackPreloadSourcePath, 'utf8').trim();
    const patchedContent = `${stripped.content.trimEnd()}\n\n${hackContent}\n`;
    fs.writeFileSync(preloadJsPath, patchedContent, 'utf8');
    logSuccess('preload.js 补丁注入完成。');
}

function patchLoadingOverlay(tempUnpackDir) {
    const loadingOverlayPath = path.join(tempUnpackDir, 'dist', 'loadingOverlay.js');
    if (!fs.existsSync(loadingOverlayPath)) {
        logWarn('未发现 loadingOverlay.js，跳过静态过渡界面汉化。');
        return;
    }

    const before = fs.readFileSync(loadingOverlayPath, 'utf8');
    const after = before.replace(/Loading Antigravity|正在加载 Antigravity/g, '正在加载 Antigravity');
    if (after !== before) {
        fs.writeFileSync(loadingOverlayPath, after, 'utf8');
        logSuccess('加载过渡界面汉化完成。');
    } else {
        logInfo('加载过渡界面没有匹配到需要替换的文本。');
    }
}

function inferUnpackDirs(sidecarPath) {
    if (!fs.existsSync(sidecarPath)) {
        return [];
    }

    const result = [];
    for (const entry of fs.readdirSync(sidecarPath, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }

        if (entry.name === 'node_modules') {
            const nodeModulesPath = path.join(sidecarPath, entry.name);
            for (const pkgEntry of fs.readdirSync(nodeModulesPath, { withFileTypes: true })) {
                if (!pkgEntry.isDirectory()) {
                    continue;
                }
                if (pkgEntry.name.startsWith('@')) {
                    const scopePath = path.join(nodeModulesPath, pkgEntry.name);
                    for (const scopedPkg of fs.readdirSync(scopePath, { withFileTypes: true })) {
                        if (scopedPkg.isDirectory()) {
                            result.push(path.posix.join('node_modules', pkgEntry.name, scopedPkg.name));
                        }
                    }
                } else {
                    result.push(path.posix.join('node_modules', pkgEntry.name));
                }
            }
        } else {
            result.push(entry.name);
        }
    }

    return result;
}

function packAndSwap(tempUnpackDir, asarPath, dryRun) {
    const asarDir = path.dirname(asarPath);
    const sidecarPath = getSidecarPath(asarPath);
    const unpackDirs = inferUnpackDirs(sidecarPath);
    const tempOutput = path.join(asarDir, `app.asar.patch-${process.pid}`);
    const tempOutputSidecar = `${tempOutput}.unpacked`;

    const packArgs = ['pack'];
    for (const unpackDir of unpackDirs) {
        packArgs.push('--unpack-dir', unpackDir);
    }
    packArgs.push(tempUnpackDir, tempOutput);

    if (unpackDirs.length > 0) {
        logInfo(`将保留 unpacked 目录布局: ${unpackDirs.join(', ')}`);
    } else {
        logWarn('未检测到 app.asar.unpacked 目录，按普通 asar 包重新封包。');
    }

    if (dryRun) {
        logInfo(`[dry-run] 将执行: npx --yes asar ${packArgs.join(' ')}`);
        return;
    }

    fs.rmSync(tempOutput, { force: true });
    fs.rmSync(tempOutputSidecar, { recursive: true, force: true });
    runAsar(packArgs);

    fs.rmSync(asarPath, { force: true });
    fs.renameSync(tempOutput, asarPath);

    if (fs.existsSync(tempOutputSidecar)) {
        fs.rmSync(sidecarPath, { recursive: true, force: true });
        fs.renameSync(tempOutputSidecar, sidecarPath);
    }

    logSuccess('app.asar 封包并替换完成。');
}

function cleanup(dir) {
    if (fs.existsSync(dir)) {
        logInfo('清理临时解包目录中...');
        try {
            fs.rmSync(dir, { recursive: true, force: true });
        } catch (err) {
            logWarn(`清理临时目录失败: ${err.message}`);
        }
    }
}

function getMacAppBundlePath(asarPath) {
    const resourcesDir = path.dirname(asarPath);
    const appBundlePath = path.dirname(path.dirname(resourcesDir));
    if (appBundlePath.endsWith('.app') && fs.existsSync(appBundlePath)) {
        return appBundlePath;
    }
    return '';
}

function signMacApp(asarPath, noSign, dryRun) {
    if (os.platform() !== 'darwin' || noSign) {
        return;
    }

    const appBundlePath = getMacAppBundlePath(asarPath);
    if (!appBundlePath) {
        logWarn('未能从 app.asar 路径定位 macOS .app 包，跳过重签名。');
        return;
    }

    if (dryRun) {
        logInfo(`[dry-run] 将执行重签名: codesign --force --deep --sign - "${appBundlePath}"`);
        return;
    }

    logInfo('检测到 macOS 系统，正在进行 Ad-hoc 本地重签名...');
    try {
        run('codesign', ['--force', '--deep', '--sign', '-', appBundlePath]);
        logSuccess('macOS 应用签名成功。');
    } catch (err) {
        logError(`应用签名失败: ${err.message}`);
        console.log(colors.yellow('您也可以手动尝试执行以下命令完成重签名：'));
        console.log(`codesign --force --deep --sign - "${appBundlePath}"\n`);
    }
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
        printHelp();
        return;
    }

    console.log(colors.cyan('\n=================================================='));
    console.log(colors.cyan('       Antigravity 客户端汉化补丁工具'));
    console.log(colors.cyan('==================================================\n'));

    const asarPath = await resolveAsarPath(args.asarPath);
    ensureAsarPath(asarPath);

    const asarDir = path.dirname(asarPath);
    const tempUnpackDir = path.join(asarDir, TEMP_DIR_NAME);
    const sidecarPath = getSidecarPath(asarPath);

    logInfo(`选定 app.asar 位置: ${colors.green(asarPath)}`);
    logInfo(`sidecar 目录位置: ${colors.green(sidecarPath)}`);
    logInfo(`版本化备份目录: ${colors.green(path.join(asarDir, BACKUP_DIR_NAME))}`);

    if (args.restore) {
        restoreLatestBackup(asarPath, args.dryRun);
        signMacApp(asarPath, args.noSign, args.dryRun);
        return;
    }

    createBackup(asarPath, args.dryRun);

    if (args.dryRun) {
        logInfo('[dry-run] 已完成只读检查，未修改应用文件。');
        return;
    }

    cleanup(tempUnpackDir);

    try {
        logInfo('正在解包 app.asar ...');
        runAsar(['extract', asarPath, tempUnpackDir]);
        logSuccess('app.asar 解包完成。');

        injectPreload(tempUnpackDir, args.force);
        patchLoadingOverlay(tempUnpackDir);
        packAndSwap(tempUnpackDir, asarPath, args.dryRun);
    } catch (err) {
        logError(err.message);
        throw err;
    } finally {
        cleanup(tempUnpackDir);
    }

    signMacApp(asarPath, args.noSign, args.dryRun);

    console.log(colors.green('\n=================================================='));
    console.log(colors.green('             汉化补丁已完成'));
    console.log(colors.green('=================================================='));
    console.log('若应用处于运行状态，请彻底退出客户端并重启以使汉化生效。\n');
}

main().catch(err => {
    logError(`发生未知错误: ${err.message}`);
    process.exit(1);
});

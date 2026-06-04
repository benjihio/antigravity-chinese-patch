# Antigravity 客户端汉化补丁工具

这个工具用于给 Antigravity Electron 客户端注入中文界面补丁。当前实现通过修改 `app.asar` 内的 `dist/preload.js` 和 `dist/loadingOverlay.js` 完成运行时翻译。

> 注意：这是本地修改客户端资源包的补丁工具，不是官方语言包。Antigravity 更新后可能需要重新执行补丁。

## 文件说明

1. `localize.js`：补丁控制脚本，负责定位 `app.asar`、版本化备份、解包、注入、重新封包、恢复备份和 macOS 本地重签名。
2. `hack_preload.js`：运行时 DOM 翻译补丁，包含翻译词库、属性拦截、动态节点监听、代码/编辑器区域保护和全局 Serif 字体样式。
3. `package.json`：可选 npm 脚本和 asar CLI 版本声明。

## 环境要求

- Node.js
- 可运行 `npx`
- macOS 需要系统自带 `codesign`，脚本默认会在写入后进行 Ad-hoc 本地重签名

## 默认路径

脚本会自动识别以下默认路径：

- macOS：`/Applications/Antigravity.app/Contents/Resources/app.asar`
- Windows：`%LOCALAPPDATA%\Programs\antigravity\resources\app.asar`

如果客户端安装在其他位置，可以用 `--asar` 指定路径，或在交互提示里拖拽 `app.asar`。

## 使用方式

```bash
cd /path/to/antigravity-chinese-patch
node localize.js
```

直接指定路径：

```bash
node localize.js --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

只检查，不写入应用：

```bash
node localize.js --dry-run --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

从最近一次版本化备份恢复：

```bash
node localize.js --restore --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

macOS 下跳过重签名：

```bash
node localize.js --no-sign
```

## 备份与恢复

每次正式执行补丁前，脚本会在 `app.asar` 同级目录创建版本化备份：

```text
antigravity-chinese-patch-backups/
  2026-06-04T23-30-00-000Z/
    app.asar
    app.asar.unpacked/
    metadata.json
```

备份会同时保存：

- `app.asar`
- `app.asar.unpacked`，如果存在
- `metadata.json`，包含创建时间、平台、原始路径和 `app.asar` 的 SHA256

恢复时请优先使用 `node localize.js --restore`，不要只手动替换 `app.asar`。Electron 应用可能同时依赖 `app.asar.unpacked`。

## 幂等性设计

- `hack_preload.js` 带有 `ANTIGRAVITY_ZH_PATCH_V2_START/END` 边界 marker。
- `localize.js` 会先移除已有 v2 补丁再注入本地最新补丁。
- 对早期旧补丁，会识别 `Antigravity 2.0 Claude Font and Chinese Interface Hack` marker 并替换为新补丁。
- 不再依赖包内 `.orig` 文件，避免多次运行后把已注入文件当成原始文件。

## 打包策略

脚本会根据现有 `app.asar.unpacked` 目录推断需要保留的 unpacked 目录，并在重新 `asar pack` 时传入 `--unpack-dir`。这样可以避免把原本应留在 sidecar 目录里的资源全部打进 `app.asar`。

## 运行时保护

补丁会跳过以下区域，降低误翻代码和输入内容的概率：

- `code`、`pre`、`kbd`、`samp`
- `script`、`style`
- `textarea`、`input` 内部文本
- `[contenteditable="true"]`
- `.monaco-editor`、`.cm-editor`、`.xterm`
- 带 `data-language` 或 `data-testid*="code"` 的区域

补丁仍会翻译按钮、标题、placeholder、aria-label 等 UI 文本。

字体样式会尽量全局应用到客户端文本，同时排除常见图标字体类，避免图标按钮显示成乱码。

## 已知边界

- 翻译依赖 DOM 文本匹配，不等同于官方 i18n；新增界面文本需要继续补词库。
- 如果 Antigravity 大版本改动了 `dist/preload.js` 或 `dist/loadingOverlay.js` 路径，脚本会停止并报错。
- macOS 重签名会改变本地应用签名状态；这是修改 Electron 应用资源后的常见要求。

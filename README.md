# Antigravity Chinese Patch

[![CI](https://github.com/benjihio/antigravity-chinese-patch/actions/workflows/ci.yml/badge.svg)](https://github.com/benjihio/antigravity-chinese-patch/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/benjihio/antigravity-chinese-patch?include_prereleases)](https://github.com/benjihio/antigravity-chinese-patch/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Antigravity 客户端汉化补丁工具。它会给 Antigravity Electron 客户端注入中文界面补丁，并保留全局 Serif 字体风格。

> 非官方项目：本工具不是 Google 或 Antigravity 官方语言包。它会修改本地 `app.asar`，请先确认你愿意承担本地补丁带来的兼容性风险。

## Features

- macOS / Windows 默认路径自动识别。
- 运行时 DOM 汉化，覆盖文本、按钮、tooltip、placeholder、aria-label 和常见 data tooltip 属性。
- 全局 `Lora + Noto Serif SC` Serif 字体风格，并尽量排除图标字体避免图标乱码。
- 跳过代码块、终端、编辑器和输入内容，降低误翻代码的概率。
- v2 marker 幂等注入，多次运行不会重复追加补丁。
- 版本化备份 `app.asar` 和 `app.asar.unpacked`。
- `--dry-run` 只读检查，`--restore` 一键恢复。
- macOS 修改后自动 Ad-hoc 重签名。
- GitHub Actions 自动检查并生成 release zip。

## Quick Start

```bash
git clone https://github.com/benjihio/antigravity-chinese-patch.git
cd antigravity-chinese-patch
npm install
npm run check
node localize.js --dry-run
node localize.js
```

如果 Antigravity 不在默认路径，手动指定 `app.asar`：

```bash
node localize.js --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

Windows 示例：

```powershell
node localize.js --asar "$env:LOCALAPPDATA\Programs\antigravity\resources\app.asar"
```

运行前建议彻底退出 Antigravity。macOS 可以用 `Cmd + Q`，Windows 可从托盘或任务管理器退出。

## Restore

脚本每次正式补丁前都会创建版本化备份：

```text
antigravity-chinese-patch-backups/
  2026-06-04T23-30-00-000Z/
    app.asar
    app.asar.unpacked/
    metadata.json
```

恢复最近一次备份：

```bash
node localize.js --restore
```

恢复指定安装路径：

```bash
node localize.js --restore --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

不要只手动替换 `app.asar`。Electron 应用可能同时依赖 `app.asar.unpacked`。

## Commands

```bash
node localize.js                       # 交互式补丁
node localize.js --dry-run             # 只读检查，不写入应用
node localize.js --restore             # 恢复最近一次版本化备份
node localize.js --asar <path>         # 指定 app.asar
node localize.js --no-sign             # macOS 跳过 codesign
node localize.js --force               # 强制用本地补丁覆盖已有 v2 补丁
npm run dist                           # 生成 GitHub release zip
```

## Default Paths

- macOS: `/Applications/Antigravity.app/Contents/Resources/app.asar`
- Windows: `%LOCALAPPDATA%\Programs\antigravity\resources\app.asar`

## How It Works

1. 定位 `app.asar`。
2. 创建版本化备份，包含 `app.asar` 和 `app.asar.unpacked`。
3. 解包 `app.asar`。
4. 替换 `dist/preload.js` 中已有旧补丁或 v2 补丁，再注入 `hack_preload.js`。
5. 汉化 `dist/loadingOverlay.js`。
6. 根据现有 `app.asar.unpacked` 推断 `--unpack-dir`，重新封包并保留 sidecar 布局。
7. macOS 下执行 Ad-hoc 重签名。

## Missing Translations

如果你发现仍有英文：

1. 截图前先隐藏私人信息。
2. 复制英文原文，例如 `Undo changes up to this point`。
3. 打开 [Missing translation issue](https://github.com/benjihio/antigravity-chinese-patch/issues/new?template=missing_translation.yml)。

欢迎直接提交 PR。翻译建议见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## Release Package

本地生成 zip：

```bash
npm run dist
```

输出位置：

```text
dist/antigravity-chinese-patch-v0.3.0.zip
```

GitHub 上推送 tag 会自动创建 Release：

```bash
git tag v0.3.0
git push origin v0.3.0
```

## Known Limits

- 这是运行时 DOM 文本替换，不等同于官方 i18n。
- Antigravity 更新后，如果 `dist/preload.js` 或 `dist/loadingOverlay.js` 路径变化，脚本会停止并报错。
- 某些远程加载或动态生成的文本可能需要继续补词库。
- Google Fonts 可能受网络环境影响；如果字体加载失败，系统会回退到本地 Serif 字体。

## License

MIT. See [LICENSE](LICENSE).

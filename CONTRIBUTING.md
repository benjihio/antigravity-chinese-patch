# Contributing

Thanks for improving Antigravity Chinese Patch.

## Good Contributions

- Missing Chinese translations with screenshots or exact English source text.
- Safer patching or restore behavior.
- Compatibility reports for new Antigravity versions.
- macOS or Windows path and signing improvements.
- UI font and tooltip fixes that do not break code blocks or icons.

## Development

```bash
npm install
npm run check
npm run dry-run -- --asar "/Applications/Antigravity.app/Contents/Resources/app.asar"
```

Before submitting a PR:

1. Run `npm run check`.
2. Use `--dry-run` first if the change touches `localize.js`.
3. Do not commit `app.asar`, `app.asar.unpacked`, backups, screenshots with private data, or `node_modules`.
4. Keep translations practical and short enough for existing UI controls.

## Translation Guidelines

- Prefer concise Chinese UI labels.
- Keep product names such as Antigravity, Gemini, GitHub, IDE, MCP, and Token when translating them would be unclear.
- Do not translate code blocks, terminal output, file paths, model names, or command snippets.
- If a string is generated dynamically, add a regex rule and include the original English example in the PR.

## Safety

This tool modifies local Electron application resources. Changes that affect backup, restore, or signing behavior should explain failure modes and rollback steps in the PR.

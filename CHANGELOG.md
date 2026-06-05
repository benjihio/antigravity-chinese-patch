# Changelog

## 0.3.1 - 2026-06-05

- Added translation for compacted conversation warning.
- Added translation for tool execution status (`Listed permissions`).
- Added regex rules for tool execution time duration (`Worked for 1m`).
- Removed `Repository Topics` section from README.md to keep the document clean.

## 0.3.0 - 2026-06-04

- Added missing tooltip translations for response feedback, undo actions, and project navigation.
- Expanded tooltip attribute translation coverage.
- Restored the global Lora + Noto Serif SC font loading style.
- Added GitHub project metadata, release packaging, CI, issue templates, and documentation.

## 0.2.0 - 2026-06-04

- Reworked patching to use explicit v2 markers instead of `.orig` files.
- Added versioned backups for `app.asar` and `app.asar.unpacked`.
- Added `--restore`, `--dry-run`, `--asar`, `--no-sign`, and `--force` options.
- Preserved `app.asar.unpacked` layout during repackaging.
- Added code/editor region translation guards.

## 0.1.0 - 2026-06-04

- Initial Antigravity Chinese interface patcher.
- Added preload injection, DOM text translation, loading overlay localization, and macOS ad-hoc signing.

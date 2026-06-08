# Changelog

## 0.3.13 - 2026-06-08

- Refined thought time (e.g. `Thought for`) translation rules to fully translate time units (e.g. converting `s` to `秒` and `m` to `分`).

## 0.3.12 - 2026-06-08

- Added translation mapping and regex rules for planning mode actions (e.g. `Auto-proceeded with`, `Implementation Plan`, `Walkthrough`, `Task Checklist`).
- Added translation mapping and regex rule for file type editing actions (e.g. `Editing js`).

## 0.3.11 - 2026-06-08

- Added translation mapping for task running status (e.g. `running`, `Running`).

## 0.3.10 - 2026-06-07

- Added translation rules for `Run Command` and `Execute Command` variants in the task logs timeline.

## 0.3.9 - 2026-06-07

- Added translation rules for agent tool execution actions in the timeline (e.g. `Searching web/files/workspace for`, `Viewing/Reading/Editing/Creating/Writing/Deleting file`, `Running command`, `Analyzing directory`).

## 0.3.8 - 2026-06-07

- Added comprehensive translation mapping for MCP server connections, Git status panel categories, workspace layouts (Terminal, Output, Problems, Debug Console), developer configurations (Temperature, API key, etc.), file search, and agent execution lifecycle states (thinking, calling tools, generating response).

## 0.3.7 - 2026-06-07

- Added comprehensive localization rules for time-ago relative timestamps (e.g. `2 minutes ago`, `just now`, `yesterday`).
- Added translation rules for standalone directories, changes, insertions, deletions, agents, conversations, tasks queued, tools, errors, warnings, bytes, token rates, and git commit relationships.

## 0.3.6 - 2026-06-07

- Added translation rules for standalone folder/file counts (e.g. `2 folders ˅`, `5 files`).

## 0.3.5 - 2026-06-07

- Refactored DOM translation engine to support recursive translation of dynamic regex-captured groups.
- Enhanced suffix and prefix stripping to support all forms of arrows, chevrons, keyboard shortcuts, and ellipses.
- Added a translation rule for task actions ending in "finish" (e.g. `Check final model download finish`).
- Narrowed the `shouldSkipNode` selectors to prevent over-skipping of action buttons and UI tabs.

## 0.3.4 - 2026-06-07

- Added translation and regex rules for timers, network errors, task statuses, and check actions (e.g. `Timed 40 seconds`, `Schedule download check: Timer has expired`).

## 0.3.3 - 2026-06-07

- Added translation mapping and regex rule for tool execution actions (e.g. `Run download script`).

## 0.3.2 - 2026-06-05

- Added translation mapping and regex rule for search and list results count (e.g. `3 results`).

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

# Security Policy

## Supported Versions

Only the latest release is maintained.

## Reporting a Vulnerability

Please do not open a public issue for vulnerabilities that could damage user files or weaken local application security.

Report privately by opening a GitHub security advisory for this repository, or contact the maintainer through GitHub.

Useful details:

- Operating system and Antigravity version.
- Exact command used.
- Whether `--dry-run` was tested.
- Relevant terminal output.
- Whether `app.asar` or `app.asar.unpacked` was modified.

## Scope

In scope:

- Backup or restore bugs that can corrupt `app.asar` or `app.asar.unpacked`.
- Command execution bugs in the patcher.
- Unsafe path handling.
- Signing or repackaging behavior that can leave the app unusable without a clear rollback path.

Out of scope:

- Antigravity product vulnerabilities.
- Missing translations.
- Visual font preferences.

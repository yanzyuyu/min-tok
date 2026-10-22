# Release v1.2.0: Anti-Over-Engineering Engine & Autonomous Skills Suite

## Summary

`min-tok` v1.2.0 delivers a zero-dependency CLI engine and a comprehensive pack of 21 battle-tested autonomous AI agent skills designed to enforce senior human software engineering discipline, eliminate package bloat, and slash LLM token consumption.

## Key Highlights

- **Complete 21 Autonomous Skills Pack**: Shipped inside `skills/` with support for automated synchronization to `~/.gemini/config/skills` or `~/.agents/skills`.
- **Zero-Dependency CLI Architecture**: 100% built on Node.js standard library (`node:fs`, `node:path`, `node:test`, `node:crypto`) with sub-50ms execution speed and zero `node_modules` overhead.
- **Multi-Ecosystem Manifest Scanner**: Inspects `package.json`, `requirements.txt`, and `pyproject.toml` to identify redundant dependencies and recommend native standard library replacements.
- **Deterministic Auto-Purger**: Automatically refactors code imports from redundant packages (such as `uuid`) into standard platform primitives.
- **Architectural Complexity Auditor**: Quantifies LOC versus abstraction layers into an actionable Over-Engineering Score (0-100).
- **Token Shield Unified Diff**: Minimizes token waste by producing compact diffs during automated code edits.
- **Visual Vector Assets**: Features root-level dark-mode vector hero banner (`banner.svg`) and live execution terminal demo (`terminal_demo.svg`).
- **Verified Security & Tests**: 7/7 unit tests passing deterministically and 100/100 clean security score via `tyw-audit`.

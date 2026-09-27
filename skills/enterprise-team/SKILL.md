---
name: enterprise-team
description: >-
  Lean Multi-Agent & Orchestration Protocol (YAGNI & 200% Token Efficient).
  Enforces Solo-First execution for single-feature/focused tasks, reserving subagents strictly for decoupled parallel modules.
---

# Lean Multi-Agent & Orchestration Protocol (YAGNI Token Shield)

This skill governs when to execute solo versus when to deploy subagents, eliminating token-wasting bureaucracies.

---

## 1. The Solo-First Rule (Save 200% Tokens)

**Default Operating Mode:**
- For bug fixes, single features, scripts, utilities, tool creation, refactoring, and tasks touching $\le 5$ files:
  **OPERATE IN SOLO MODE.**
- Execute code directly, run inline compilers/linters, and perform self-verification using `tyw-audit` and automated test scripts.
- **DO NOT spawn subagents for standard tasks.** Spawning multi-agent teams for focused work duplicates system prompts and context windows, wasting massive token quotas.

---

## 2. When Are Subagents Permitted? (Strict Decoupled Concurrency)

Deploy subagents via `invoke_subagent` **ONLY** when:
1. **Decoupled Concurrency:** The project requires simultaneous, independent work in distinct domains (e.g., building a full-stack system where Backend API and Frontend UI can be written concurrently in separate directories).
2. **Explicit User Mandate:** The user specifically requests a multi-agent team (e.g., using `/teamwork-preview`).
3. **Heavy Context Isolation:** A sub-task requires massive file exploration that would pollute the main conversation's context window.

---

## 3. Lean Team Rules (Max 2 Subagents)

When subagents are justified:
- **Max 1 Builder + 1 Auditor:** Never spawn an army of 4-5 agents. One builder creates the implementation; one auditor/tester verifies security and functionality.
- **Micro-Diff Auditing:** The auditor inspects only `git diff` or patch outputs, never whole-file dumps.
- **State Preservation:** Maintain `PROGRESS_STATE.md` to track milestones and resume smoothly across server restarts.

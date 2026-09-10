---
name: git-craft
description: >-
  MANDATORY: Execute FIRST before running ANY git commands (init, add, commit, push).
  Pragmatic Git workflow, human-like commit authoring, and repository hygiene without AI slop.
  Do NOT skip this. Use to ensure zero credential/agent leaks, human-style commit logs, and clean git history.
---

# Pragmatic Git & Repository Hygiene (git-craft)

This skill guides the agent to manage Git repositories cleanly, reliably, and author commit messages that look 100% like they were written by a real, senior human developer—eliminating all traces of robotic "AI commit slop".

---

## 1. Human-Grade Commit Messages (Anti-AI-Slop)

### The "AI Commit Smell" to Eliminate:
AI notoriously generates robotic, over-formalized commit messages:
* **BAD (AI Slop):** `feat: initial commit for crosscheck data reconciliation engine`
* **BAD (AI Slop):** `docs: upgrade README with visual terminal snapshot and benchmark diffs using markdown-doc skill`
* **BAD (AI Slop):** `chore: implement persistent rules via /learn slash command`

### The 4 Rules for Authentic Human Commits:

1. **Never Leak Agent Mechanics:**
   * **STRICT BAN:** Never mention skill names, prompts, slash commands, or AI tools in commit messages (e.g., NEVER write *"using markdown-doc skill"*, *"created by antigravity"*, *"via /learn"*). Commits should look like a human engineer typed them in their terminal.

2. **Learn and Match the User's Typing Style:**
   * Observe how the user speaks in the conversation (casual tech-bilingual, direct, punchy).
   * Reflect that tone naturally: short, clear, and grounded.

3. **Keep It Punchy (3 to 7 words):**
   * Real developers don't write essays in the commit title:
     * *Instead of:* `feat: initial commit for crosscheck data reconciliation engine`
       $\rightarrow$ **`init crosscheck engine`** or **`first commit: crosscheck`**
     * *Instead of:* `docs: upgrade README with visual terminal snapshot and benchmark diffs using markdown-doc skill`
       $\rightarrow$ **`update readme with terminal demo and benchmark`**
     * *Instead of:* `chore: untrack .agents skills from repo and update project tree in README`
       $\rightarrow$ **`remove .agents from repo and clean readme tree`**
     * *Instead of:* `fix: resolve UnicodeEncodeError charmap issue on Windows cp1252 legacy console`
       $\rightarrow$ **`fix windows terminal encoding crash`**

4. **Natural Verb-First Phrasing:**
   * Use clean, standard verbs: `init`, `add`, `fix`, `update`, `clean`, `remove`, `move`.
   * Optional lowercase prefixes (`feat:`, `fix:`, `docs:`) are fine ONLY IF kept brief and natural, not stuffed with prepositional fluff.

---

## 2. Bulletproof `.gitignore` from Day 1

Before making the very first commit in any project, ALWAYS create an airtight `.gitignore`:

```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.db
*.sqlite3
.pytest_cache/
venv/
.venv/

# Node / Web
node_modules/
dist/
build/
.next/

# Environment & Secrets
.env
.env.local
*.pem
*.key

# Agent / Tooling Configuration (NEVER push to product repos)
.agents/
.agent/
_agents/
_agent/
```

> **Critical Rule:** Never commit internal agent workspaces (`.agents/`) into public or product repositories.

---

## 3. Atomic Staging & Untracking

* Never blindly run `git add .` if sensitive files or untracked directories were accidentally created.
* Always check `git status` before committing.
* If a file was committed by mistake, untrack it while keeping the local file:
  ```bash
  git rm -r --cached <file_or_directory>
  ```

---

## 4. Windows Git & Encoding Hygiene

On Windows environments:
* Be aware of CRLF vs LF warnings. Use `git config core.autocrlf true` (or standard repo `.gitattributes`).
* Always verify that files committed on Windows don't introduce encoding artifacts into Unix/CI environments.

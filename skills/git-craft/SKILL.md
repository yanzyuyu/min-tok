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

---

## 5. GitHub Account & Commit Author Verification

Before creating commits in any project:
1. Verify the active authenticated GitHub identity:
   ```bash
   gh api user --jq '{login: .login, email: .email}'
   ```
2. Ensure repository `user.name` and `user.email` match that identity:
   ```bash
   git config user.name "<github_login>"
   git config user.email "<github_email>"
   ```
   This ensures that all commits pushed to GitHub link directly to the user's verified profile and avatar, avoiding disconnected generic silhouettes.

---

## 6. Mandatory Repository Documentation Gate (README & Assets)

Before pushing the initial commit or publishing any public repository:
1. **Verify `README.md` Compliance:**
   * The project must have a production-grade `README.md` based on `markdown-doc/SKILL.md` or templates in `~/.gemini/config/skills/markdown-doc/templates/`.
   * **Mandatory Hero Banner:** Must include an aesthetic dark-mode vector SVG banner (`banner.svg`) at the repository root, centered at the top.
   * **Mandatory Badges:** Minimum 5 centered Shields.io badges immediately below the hero banner (Runtime, Release, Domain Metric, Dependencies, Test Suite/Audit, License).
   * **Mandatory Visual Proof:** Must include a dark-mode vector SVG terminal demo (`terminal_demo.svg`) for CLI/backend tools or a clean UI snapshot for web apps, saved directly at the repository root.
   * **Mandatory Vector Back-to-Top:** Navigation links at section ends must use the dark-mode vector SVG button (`▲ Back to Top`).
   * **Zero AI Marketing Slop:** Strict ban on emojis in headings and marketing hype.
2. **Verify License File:**
   * Every public repository must have a root `LICENSE` file (MIT, Apache-2.0, etc.) with the correct copyright holder.

---

## 7. Semantic Versioning & GitHub Releases

Never leave a GitHub repository homepage with an empty "Releases" sidebar:
1. Tag commits using Semantic Versioning (`v1.0.0`, `v1.1.0`, etc.):
   ```bash
   git tag -a v1.0.0 -m "v1.0.0: initial production release"
   git push origin v1.0.0
   ```
2. Create an official release via GitHub CLI:
   ```bash
   gh release create v1.0.0 --title "v1.0.0: Initial Production Release" --notes-file RELEASE_NOTES.md
   ```
3. Set the repository metadata:
   ```bash
   gh repo edit --description "<Precise technical summary>"
   gh repo edit --add-topic "<topic1>" --add-topic "<topic2>"
   ```

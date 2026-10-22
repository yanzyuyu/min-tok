---
name: markdown-doc
description: >-
  MANDATORY: Execute FIRST before writing or editing ANY Markdown file (README.md, docs, artifacts).
  Create tier-1 production-grade, visual Markdown documentation and READMEs without AI slop.
  MANDATES THE UNIVERSAL BADGES PROTOCOL across all project types (Web, CLI, Backend, Data, Security, AI Agents), operational threat-first problem framing, architectural capabilities tables, zero-dependency dark-mode terminal SVG screenshots (terminal_demo.svg), clean annotated trees, and deterministic test suite proof.
---

# Production Markdown & Visual Documentation Standard (markdown-doc)

This skill enforces the **Tier-1 Open-Source & Enterprise Production README Standard** refined from battle-tested repositories. It eliminates all traces of robotic AI marketing slop (no emojis in headings, no "revolutionary" buzzwords, no corporate filler) and mandates visual proof of execution.

---

## 1. Core Principles (The Anti-AI-Slop Standard)

1. **Zero Emoji Spam (Strict Ban):** No emojis in titles, headers, bullet points, or badges.
   * *Banned:* `🚀 Quickstart`, `✨ Features`, `🔒 Security`, `⚡ Fast`.
   * *Standard:* `Quickstart`, `Features`, `Security Architecture`, `Performance Benchmarks`.
2. **Lead with Operational Reality:** Never open with abstract praise or marketing fluff ("A modern cutting-edge system designed to revolutionize..."). Open with the exact technical headache, CVE threat model, data drift risk, or operational failure being solved.
3. **Mandatory Vector Hero Banner (`banner.svg`) & Badges:** Every single project README MUST open with an aesthetic, dark-mode vector SVG banner (`banner.svg`) placed at the very top, followed by a centered row of 5 to 7 functional Shields.io badges and a centered bold technical summary.
4. **Direct Root Assets (No Folder Clutter):** Save visual assets at the root level alongside `README.md` (`banner.svg`, `terminal_demo.svg`), never buried in obscure `docs/` subdirectories. This guarantees reliable rendering on GitHub repository homepages.
5. **Clean International Technical English:** Maintain crisp, professional, and authentic engineering terminology (*pipeline, drift, unauthenticated RCE, atomic inode swap, zero-dependency*).

---

## 2. Universal Shields.io Badges Matrix (STRICTLY MANDATORY)

Every README generated under this skill **MUST** include a centered row of 5 to 7 functional Shields.io status badges immediately below the hero banner. This requirement applies to **ALL PROJECT TYPES** (not just security/CVE tools).

### A. Universal Baseline Badges (Required on ALL Projects)
Every project must display at least these 4 baseline dimensions:
1. **Runtime / Language:**
   * Python: `[![Python Version](https://img.shields.io/badge/python-3.10%2B-3776AB?logo=python&logoColor=white)](https://python.org)`
   * Node: `[![Node Version](https://img.shields.io/badge/node-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org)`
   * Go: `[![Go Version](https://img.shields.io/badge/go-1.22%2B-00ADD8?logo=go&logoColor=white)](https://go.dev)`
   * PHP: `[![PHP Version](https://img.shields.io/badge/php-8.2%2B-777BB4?logo=php&logoColor=white)](https://php.net)`
   * Rust: `[![Rust Version](https://img.shields.io/badge/rust-1.80%2B-000000?logo=rust&logoColor=white)](https://rust-lang.org)`
2. **Release (Verified Stable):**
   * Use static or live release tags: `[![Release](https://img.shields.io/badge/release-v1.0.0-0969da?logo=github&logoColor=white)](https://github.com/<user>/<repo>/releases)`
3. **Zero-Dependency / Supply Chain:**
   * `[![Dependencies](https://img.shields.io/badge/dependencies-0%20(stdlib%20only)-brightgreen)](#)`
   * `[![Dependencies](https://img.shields.io/badge/dependencies-lean%20(zero--bloat)-brightgreen)](#)`
4. **Quality & Verification:**
   * `[![Test Suite](https://img.shields.io/badge/tests-15%2F15%20passed-success)](#)`
   * `[![Security Audit](https://img.shields.io/badge/security%20audit-passed%20100%2F100-success)](#)`
5. **License:**
   * `[![License](https://img.shields.io/badge/license-MIT-informational)](LICENSE)`

### B. Domain-Adapted Metric Badges (Choose 2-3 Based on Domain)

* **Web UI & Frontend (React / Next.js / Vite):**
  * `[![Framework](https://img.shields.io/badge/framework-react%2019-61DAFB?logo=react&logoColor=black)](#)`
  * `[![Styling](https://img.shields.io/badge/styling-tailwind%20v4-38B2AC?logo=tailwindcss&logoColor=white)](#)`
  * `[![Bundle Size](https://img.shields.io/badge/bundle-12KB%20gzipped-success)](#)`
  * `[![Performance](https://img.shields.io/badge/lighthouse-100%2F100-success)](#)`

* **Backend Services & APIs (Express / Fastify / Laravel / Go):**
  * `[![Architecture](https://img.shields.io/badge/architecture-zero--trust%20REST-blue)](#)`
  * `[![Throughput](https://img.shields.io/badge/throughput-45k%20req%2Fs-success)](#)`
  * `[![Database](https://img.shields.io/badge/database-postgresql%20WAL-336791?logo=postgresql&logoColor=white)](#)`

* **CLI, System Code & Desktop Utilities:**
  * `[![Binary](https://img.shields.io/badge/distribution-single%20executable-blue)](#)`
  * `[![Platform](https://img.shields.io/badge/platform-linux%20%E2%80%A2%20macos%20%E2%80%A2%20windows-lightgray)](#)`
  * `[![Memory](https://img.shields.io/badge/memory-<%2030MB%20RSS-success)](#)`

* **Data Pipelines & Reconciliation Engines:**
  * `[![Throughput](https://img.shields.io/badge/throughput-210k%20rows%2Fs-success)](#)`
  * `[![Engine](https://img.shields.io/badge/reconciliation-push--down%20hash-blue)](#)`
  * `[![Integrity](https://img.shields.io/badge/data%20drift-0%20discrepancies-success)](#)`

* **Cybersecurity, Hardening & CVE Mitigation:**
  * `[![Security Rating](https://img.shields.io/badge/CVSS%20v4.0-9.2%20CRITICAL-critical)](#)`
  * `[![Vulnerability](https://img.shields.io/badge/CVE-2026--109618%20%2F%2019-red)](#)`
  * `[![Architecture](https://img.shields.io/badge/architecture-atomic%20transaction-blue)](#)`

* **Autonomous AI Agents & MCP Servers:**
  * `[![Protocol](https://img.shields.io/badge/protocol-MCP%20v1.0-purple)](#)`
  * `[![Model Engine](https://img.shields.io/badge/sdk-google--genai%20%7C%20anthropic-blue)](#)`
  * `[![Token Efficiency](https://img.shields.io/badge/tokens-lean%20diff%20only-success)](#)`

---

## 3. The 6-Part Production README Skeleton

Every repository README generated under this skill must adhere to this 6-part structure:

### Part 1: Hero Banner, Centered Badges & Technical Summary
```markdown
<a name="readme-top"></a>

<p align="center">
  <img src="banner.svg" alt="<project-name> Banner" width="100%" />
</p>

<p align="center">
  <a href="..."><img src="..." alt="..." /></a>
  ...
</p>

<p align="center">
  <strong><One-sentence technical summary of what the software strictly does without marketing fluff.></strong>
</p>
```

### Part 2: Operational Reality & Threat Profile (The Real Problem)
2 to 3 paragraphs detailing the exact operational vulnerability, production outage scenario, data drift nightmare, or architectural problem that necessitated building this project.

### Part 3: Architectural Capabilities & Guarantees
Use a clean Markdown comparison table:
```markdown
| Component | Target Mechanism | Operational Guarantee |
| :--- | :--- | :--- |
| **Engine** | Core logic mechanism | Exact deterministic operational guarantee. |
| **Validator** | Boundary condition checks | Zero unhandled exceptions or data corruption. |
```

### Part 4: Visual Terminal Snapshot & Command Reference
Embed the dark-mode vector SVG screenshot directly under the live execution heading, followed by exact runnable commands and clean formatted ASCII terminal outputs:
```markdown
## Command Reference & Live Execution

![Terminal Execution](terminal_demo.svg)

### 1. Main Operation
```bash
$ <command>
...
```
```

### Part 5: Clean Annotated Repository Structure
Generate the workspace tree using the root detector script:
```bash
python scripts/project_tree.py --depth 3
```
Annotate each file with a single-line functional description.

### Part 6: Deterministic Verification & Test Suite
Include the exact test runner command, test count, timing, and security verification gate status (`npx tyw-cli scan`):
```markdown
## Verification & Test Suite

```bash
<test runner command>
```

All test cases execute deterministically without external dependencies.
```

---

## 4. Terminal Snapshotting Protocol (terminal_demo.svg)

Never use fake pseudocode when real execution can be demonstrated.

### Generating the Native Zero-Dependency Terminal SVG:
Execute `capture_terminal.py` located in `scripts/`:
```bash
python ~/.gemini/config/skills/markdown-doc/scripts/capture_terminal.py --svg terminal_demo.svg --title "project — live execution" <command>
```

This script converts all ANSI color escape codes into crisp SVG `<tspan>` tags with dark-mode styling and macOS/Linux traffic light window controls.

---

## 5. Domain-Specific README Template Catalog

Ready-to-use production templates are located in `~/.gemini/config/skills/markdown-doc/templates/`:

| Template File | Target Domain | Key Sections & Badges |
| :--- | :--- | :--- |
| **`README.template.md`** | **Universal / General Open Source** | 6-part skeleton, back-to-top anchors, built-with badges, real problem framing. |
| **`cli-tool.template.md`** | **CLI Tools & System Utilities** | Single-executable badges, memory footprint (<30MB RSS), command reference table, flags, `terminal_demo.svg`. |
| **`web-app.template.md`** | **Web Apps (Next.js / React / Vite)** | Lighthouse 100/100, WCAG 2.2 AA accessibility, Tailwind v4, dynamic inline SVG icons, UI preview snapshot. |
| **`backend-api.template.md`** | **Backend Services & APIs** | Zero-trust REST / gRPC, throughput (>40k req/s), security audit (100/100), endpoint specification table, migrations. |
| **`library-sdk.template.md`** | **NPM / PyPI / Crates Libraries & SDKs** | Zero-dependency proof, bundle size (<5KB minzipped), full type annotations, API reference, benchmark comparison. |

### Template Selection Protocol:
1. Always pick the template matching the project's primary domain.
2. Substitute `<project-name>`, `<user>`, `<repo>`, and exact metrics with actual benchmarked values.
3. **Mandatory Vector SVG Back-to-Top Button:** At the end of every major section, use the dark-styled vector SVG button rather than plain text:
   ```html
   <p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/▲_Back_to_Top-21262d?style=flat-square" alt="Back to Top"></a></p>
   ```
4. Execute `tyw-cli scan .` and embed the exact passing badge and command.

---

## 6. Empirical Benchmark & Reference Matrix (100 Repositories)

Consult [`references/100_readme_evaluation_matrix.md`](references/100_readme_evaluation_matrix.md) for the exhaustive comparative study of 100 battle-tested repositories and templates across 7 major software engineering domains (Developer Tools, Web Frameworks, Systems & Cloud, Defensive Cybersecurity, Data Engines, AI/ML Runtimes, and Standard Boilerplates).

Use this matrix to identify:
* Exact visual strategies (terminal demo SVGs, architecture diagrams, benchmark bar charts).
* Proven mental models (e.g., "SQLite for Analytics", "Write Once, Run Anywhere").
* Badges topologies that maximize trust and avoid visual clutter.
* The 7 Anti-AI-Slop defenses ensuring your documentation commands high technical authority.

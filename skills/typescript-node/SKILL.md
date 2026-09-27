---
name: typescript-node
trigger: model_decision
---

# TypeScript Node Skill

Protocols for TypeScript/Node.js:
- Strict mode: always `"strict": true` in tsconfig.json
- Never use `any` — use `unknown` + type narrowing instead
- Async/await discipline: always wrap in try/catch, never `.catch()` silently
- Module system: ESM only (`"type": "module"` in package.json)
- Error types: use discriminated unions for error states, never throw raw strings
- Environment: always use `process.env` with validation via `zod` at startup

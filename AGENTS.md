# Review guidance

- Money amounts are integer cents. Every exported function in `src/` that takes a cent amount must check it with `Number.isInteger` and throw a `TypeError` for anything else. Report an exported function that skips this check, and name this AGENTS.md rule in the finding.

# Billing guidance

- Billing code rounds with `Math.floor`, never `Math.round`, so customers are never charged a fraction of a cent more than the rate implies. Report any `Math.round` in `src/billing/`, and name this `src/billing/CLAUDE.md` rule in the finding.

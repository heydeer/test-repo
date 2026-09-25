---
files: ["src/checks-e2e/**"]
---
Database queries must pass every caller-supplied value as a bound parameter
($1, $2, ...) in the values array of `db.query`. Building SQL text by
concatenating or interpolating a value into the query string is a violation,
even when the value looks trusted. Report each query that embeds a value in its
SQL text.

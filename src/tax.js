// Tax in integer cents for a rate given in basis points (1% = 100).
export function taxCents(amountCents, rateBasisPoints) {
  return Math.round((amountCents * rateBasisPoints) / 10000);
}

// Total tax for invoice lines, rounded per line as the ledger does.
export function lineTaxes(lines, rateBasisPoints) {
  return lines.map((line) => taxCents(line.amountCents, rateBasisPoints)).reduce((a, b) => a + b, 0);
}

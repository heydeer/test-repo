// Tax in integer cents for a rate given in basis points (1% = 100).
export function taxCents(amountCents, rateBasisPoints) {
  return Math.round((amountCents * rateBasisPoints) / 10000);
}

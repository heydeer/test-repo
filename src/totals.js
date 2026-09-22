// Dedicated HTTP integration fixture: money amounts are integer cents.
export function discountedTotal(subtotalCents, discountCents) {
  return Math.max(0, subtotalCents - discountCents);
}

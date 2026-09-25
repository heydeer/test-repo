// Dedicated HTTP integration fixture: money amounts are integer cents.
// Negative discounts are treated as zero by callers.
export function discountedTotal(subtotalCents, discountCents) {
  return Math.max(0, subtotalCents - discountCents);
}

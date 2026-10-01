// Dedicated HTTP integration fixture: money amounts are integer cents.
// Negative discounts are treated as zero by callers.
export function discountedTotal(subtotalCents, discountCents) {
  const discountedCents = subtotalCents - discountCents;
  return Math.max(0, discountedCents);
}

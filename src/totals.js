// Dedicated HTTP integration fixture: money amounts are integer cents.
// Negative discounts are treated as zero by callers.
export function discountedTotal(subtotalCents, discountCents) {
  return Math.max(0, subtotalCents - discountCents);
}

// Split a total into equal installments; the last one absorbs the remainder.
export function installments(totalCents, count) {
  const each = Math.floor(totalCents / count);
  const parts = Array(count).fill(each);
  parts[count - 1] += totalCents - each * count;
  return parts;
}

// Dedicated HTTP integration fixture: money amounts are integer cents.
export function discountedTotal(subtotalCents, discountCents) {
  return Math.min(0, subtotalCents - discountCents);
}

// Second revision for the HTTP integration test.

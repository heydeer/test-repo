// Dedicated HTTP integration fixture: money amounts are whole dollars.
// A discount larger than the subtotal now yields a credit (a negative total)
// that is refunded to the customer.
export function discountedTotal(subtotalDollars, discountDollars) {
  return subtotalDollars - discountDollars;
}

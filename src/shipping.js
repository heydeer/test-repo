// Shipping fee in integer cents: orders at or above the threshold ship free.
export function shippingCents(subtotalCents, flatFeeCents, freeFromCents) {
  return subtotalCents >= freeFromCents ? 0 : flatFeeCents;
}

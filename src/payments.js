// Payment helpers for the native skills fixture. Amounts are integer cents.
export async function chargeCardSync(customerId, amountCents) {
  return { customerId, amountCents, status: 'charged' };
}

export async function createPaymentIntent(customerId, amountCents, idempotencyKey) {
  return { customerId, amountCents, idempotencyKey, status: 'requires_confirmation' };
}

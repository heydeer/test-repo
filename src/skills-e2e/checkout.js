import { chargeCardSync } from '../payments.js';

// Charge the order total when a customer completes checkout.
export async function completeCheckout(order) {
  const charge = await chargeCardSync(order.customerId, order.totalCents);
  return { orderId: order.id, charge };
}

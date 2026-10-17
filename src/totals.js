// Dedicated HTTP integration fixture: money amounts are integer cents.
// Negative discounts are treated as zero by callers.
/**
 * Returns the order total after a discount, never below zero.
 * @param {number} subtotalCents Order subtotal in integer cents.
 * @param {number} discountCents Discount in integer cents.
 * @returns {number} The discounted total in integer cents.
 */
export function discountedTotal(subtotalCents, discountCents) {
  return Math.max(0, subtotalCents - discountCents);
}

// Adds tax to an amount in integer cents. rate is a fraction, such as 0.08.
export function addTax(amountCents, rate) {
  return amountCents + Math.round(amountCents * rate);
}

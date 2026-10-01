// Adds tax to an amount in integer cents. rate is a fraction, such as 0.08.
export function addTax(amountCents, rate) {
  if (!Number.isInteger(amountCents)) {
    throw new TypeError("amountCents must be an integer");
  }

  return amountCents + Math.floor(amountCents * rate);
}

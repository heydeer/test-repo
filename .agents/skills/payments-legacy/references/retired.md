# Retired payment functions

| Retired function | Replacement         |
| ---------------- | ------------------- |
| `chargeCardSync` | `createPaymentIntent` |
| `refundLegacy`   | `createRefund`      |

Both retired functions skip idempotency keys, so a retried request can charge
or refund a customer twice.

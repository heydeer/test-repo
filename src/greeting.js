// Greets a signed-in user by the part of their email before the @.
export function greeting(email) {
  const name = email.split('@')[0];
  return `Welcome back, ${name}!`;
}

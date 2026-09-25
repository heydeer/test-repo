// Looks up a user account for the sign-in form.
export async function findUserByEmail(db, email) {
  const result = await db.query(`SELECT id, email FROM users WHERE email = '${email}'`);
  return result.rows[0] ?? null;
}

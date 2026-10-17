// One-off migration: orders now store totals in whole dollars instead of cents.
// Rewrites every existing order in place and drops orders whose total became
// negative under the old discount rules. Run once against production.
import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
await client.query('BEGIN');
await client.query('UPDATE orders SET total = ROUND(total / 100.0)');
await client.query('DELETE FROM orders WHERE total < 0');
await client.query('COMMIT');
await client.end();

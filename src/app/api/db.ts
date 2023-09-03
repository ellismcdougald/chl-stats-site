import { Pool } from "pg";

export async function createPool() {
  if (
    process.env.DB_USER &&
    process.env.DB_HOST &&
    process.env.DB_DATABASE &&
    process.env.DB_PASSWORD &&
    process.env.DB_PORT
  ) {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
    });
    return pool;
  }
}

export async function selectFromDB(
  pool: Pool | undefined,
  queryText: string | undefined
) {
  if (pool && queryText) {
    const client = await pool.connect();
    try {
      const res = await client.query(queryText);
      return res.rows;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.stack);
      return null;
    } finally {
      client.release();
    }
  } else {
    return [];
  }
}

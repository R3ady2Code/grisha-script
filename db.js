import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {Pool} = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function saveImage(url) {
  const result = await pool.query(
      'INSERT INTO images (url) VALUES ($1) RETURNING id, url, created_at',
      [url],
  );
  return result.rows[0];
}

export async function getAndDeleteOldestImage() {
  const result = await pool.query(
      'DELETE FROM images WHERE id = (SELECT id FROM images ORDER BY created_at ASC LIMIT 1) RETURNING url',
  );
  return result.rows[0]?.url || null;
}

export async function getAllUrls() {
  const result = await pool.query(
      'SELECT url FROM images ORDER BY created_at ASC',
  );
  return result.rows.map(row => row.url);
}

export default pool;

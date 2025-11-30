import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function saveImage(url) {
  const result = await pool.query(
    'INSERT INTO images (url) VALUES ($1) RETURNING id, url, created_at',
    [url]
  );
  return result.rows[0];
}

export async function getAllImages() {
  const result = await pool.query('SELECT * FROM images ORDER BY created_at DESC');
  return result.rows;
}

export default pool;

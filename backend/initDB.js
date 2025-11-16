
const { pool } = require('./config/db');

async function init() {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    contact VARCHAR(20),
    password VARCHAR(255)
  )`;
  await pool.query(sql);
  console.log("Users table ready");
}
init();

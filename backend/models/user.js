const { pool } = require('../config/db');

exports.createUser = async (name, email, contact, hashedPassword) => {
  const sql = "INSERT INTO users (name, email, contact, password) VALUES (?, ?, ?, ?)";
  const [result] = await pool.query(sql, [name, email, contact, hashedPassword]);
  return result;
};

exports.findByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows;
};

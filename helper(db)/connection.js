const { Client } = require("pg");
// const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;

const db = new Client({
  user: process.env.DB_USER,
  // host: "localhost",
  host: process.env.DB_HOST,
  // database: "fazzwallet",
  database: process.env.DB_DATABASE,
  // password: "admin",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (!err) {
    console.log("Database fazzwallet Connected");
  } else {
    console.log("Database Connection Failed", err);
  }
});

module.exports = db;

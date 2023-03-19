const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  // host: "localhost",
  host: "db.biludqssnstfthulhelw.supabase.co",
  // database: "fazzwallet",
  database: "postgres",
  // password: "admin",
  password: "@Ms21122012@Ms7895123",
  port: 5432,
});

db.connect((err) => {
  if (!err) {
    console.log("Database fazzwallet Connected");
  } else {
    console.log("Database Connection Failed", err);
  }
});

module.exports = db;

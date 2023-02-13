const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "fazzwallet",
  password: "admin",
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

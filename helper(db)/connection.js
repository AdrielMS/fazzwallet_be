const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "fazzpay",
  password: "262626",
  port: 5432,
});

db.connect((err) => {
  if (!err) {
    console.log("Database fazzpay Connected");
  } else {
    console.log("Database Connection Failed", err);
  }
});

module.exports = db;
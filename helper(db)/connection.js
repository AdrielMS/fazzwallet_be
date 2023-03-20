const { Client } = require("pg");
const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;

const db = new Client({
  user: USER,
  // host: "localhost",
  host: HOST,
  // database: "fazzwallet",
  database: DATABASE,
  // password: "admin",
  password: PASSWORD,
  port: PORT,
});

db.connect((err) => {
  if (!err) {
    console.log("Database fazzwallet Connected");
  } else {
    console.log("Database Connection Failed", err);
  }
});

module.exports = db;

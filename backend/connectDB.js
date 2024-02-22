const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "root@123",
  database: "empForm",
});

module.exports = { client };

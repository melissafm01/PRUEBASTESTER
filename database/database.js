//createpool
let mysql = require("mysql2/promise");

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "melissa",
  database: "proyectotester",
  waitForConnections: true,
  queueLimit: 0,
});

module.exports=conn;
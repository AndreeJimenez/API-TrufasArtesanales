const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kim98??_12",
  database: "trufas",
});
/* SI */
module.exports = db;
 
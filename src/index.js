const express = require("express");
const app = express(); // objeto app
const cors = require("cors");
const db = require("./database");

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const query = "SELECT * FROM productos";
  db.query(query, function (error, results, fields) {
    res.json(results);
  }); 
});

app.get("/users", (req, res) => {
  const query = "SELECT email, password from productos ";
  db.query(query, function (error, results, fields) {
    res.json(results);
  });
});

app.post("/", (req, res) => {
  const obj = req.body;
  const query = "INSERT INTO productos SET ?";
  db.query(query, obj, function (error, results, fields) {
    res.json(results.insertId);
  });
});

app.listen(app.get("port"), () => {
  console.log("listening");
});

const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
  res.send(`${parseInt(req.query.first) + parseInt(req.query.second)}`);
});

app.get("/numbers/multiply/:firstNum/:secondNum", (req, res) => {
  res.send(`${parseInt(req.params.firstNum) * parseInt(req.params.secondNum)}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

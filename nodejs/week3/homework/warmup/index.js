const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//-- Addition ----------------------------------

app.get("/calculator/add", (req, res) => {
  let firstParam = parseInt(req.query.firstParam);
  let secondParam = req.query.secondParam;
  if (secondParam.length === 1) {
    return res.send(`${firstParam + parseInt(secondParam)}`);
  }
  secondParam = secondParam
    .map((num) => parseInt(num))
    .reduce((sum, num) => {
      return sum + num;
    }, 0);

  return res.send(`${firstParam + secondParam}`);
});
//------------Subtraction-----------------
app.get("/calculator/subtract", (req, res) => {
  let firstParam = parseInt(req.query.firstParam);
  let secondParam = parseInt(req.query.secondParam);

  res.send(`${firstParam - secondParam}`);
});

//---Multiplication-------------
app.get("/calculator/multiply", (req, res) => {
  let firstParam = parseInt(req.query.firstParam);
  let secondParam = req.query.secondParam;

  if (secondParam.length === 1) {
    return res.send(`${firstParam * parseInt(secondParam)}`);
  }
  secondParam = secondParam
    .map((num) => parseInt(num))
    .reduce((product, num) => {
      return product * num;
    });

  return res.send(`${firstParam * secondParam}`);
});

// ------Division----------------
app.get("/calculator/division", (req, res) => {
  let firstParam = parseInt(req.query.firstParam);
  let secondParam = parseInt(req.query.secondParam);

  res.send(`${firstParam / secondParam}`);
});

/// Post Request---------------------------
app.post("/calculator/multiply", (req, res) => {
  let firstParam = parseInt(req.body.firstParam);
  let secondParam = parseInt(req.body.secondParam);
  res.send(`${firstParam * secondParam}`);
});

app.post("/calculator/division", (req, res) => {
  let firstParam = parseInt(req.body.firstParam);
  let secondParam = parseInt(req.body.secondParam);

  res.send(`${firstParam / secondParam}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

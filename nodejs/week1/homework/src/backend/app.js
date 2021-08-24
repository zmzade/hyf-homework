const { response } = require("express");
const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
/////////////////////////////
//Functions
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getMealsWithReviews() {
  return meals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
}

///////////////////////////////////
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("asd");
});
///////////meals
app.get("/meals", async (request, response) => {
  response.send(getMealsWithReviews());
});
app.get("/meal", async (request, response) => {
  response.send(getRandom(getMealsWithReviews()));
});
app.get("/cheap-meals", async (request, response) => {
  response.send(getMealsWithReviews().filter((x) => x.price < 100));
});
app.get("/large-meals", (request, response) => {
  response.send(getMealsWithReviews().filter((x) => x.maxNumberOfGuests > 7));
});
///////////reservation
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
app.get("/reservation", (req, res) => {
  res.send(getRandom(reservations));
});
module.exports = app;

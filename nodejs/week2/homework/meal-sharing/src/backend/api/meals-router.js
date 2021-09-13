const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
//--------------------------------------------------
//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  if (isNaN(request.params.id)) {
    return response.status(400).send("Bad Request: Uncorrect id type");
  }
  const mealsWithId = meals.filter(
    (meal) => meal.id === parseInt(request.params.id)
  );
  /*
  if (mealsWithId.length === 0) {
    return response.status(404).send("Not Found: no meal for this request");
  }*/

  return response.status(200).json(mealsWithId[0]);
  //console.log("in /api/meals");
});

//--------------------------------------------------
router.get("/", async (request, response) => {
  //What if the users writes a query parameter that is not supported?
  ////////////////////////////////////

  //Get meals that has a price smaller than maxPrice
  if (request.query.maxPrice) {
    const cheaperMeals = meals.filter(
      (meal) => meal.price < parseInt(request.query.maxPrice)
    );
    if (cheaperMeals.length === 0) {
      return response.status(400).send("Not Found:Not cheaper than this");
    }
    return response.status(200).send(cheaperMeals);
    //console.log("in /api/meals");
  }
  //---------------
  //Get meals that partially match a title.
  if (request.query.title) {
    const titleQuery = request.query.title.toLowerCase();
    const mealsTitleMatch = meals.filter((meal) =>
      meal.title.toLowerCase().includes(titleQuery)
    );

    if (mealsTitleMatch.length === 0) {
      return response.status(400).send("Not Found such meal title: Sorry!");
    }
    return response.status(200).send(mealsTitleMatch);
  }
  //--------------
  //Get meals that has been created after the date
  if (request.query.createdAfter) {
    const mealsCreatedAfter = meals.filter(
      (meal) => new Date(meal.createdAt) > new Date(request.query.createdAfter)
    );

    if (mealsCreatedAfter.length === 0) {
      return response.status(400).send("Not Found!");
    }
    return response.status(200).send(mealsCreatedAfter);
  }
  //------------------
  //Only specific number of meals
  if (request.query.limit) {
    const limitedMeals = meals.slice(0, parseInt(request.query.limit));

    if (isNaN(request.query.limit)) {
      return response.status(400).send("Bad Request: Unvalid limit");
    }
    if (request.query.limit > meals.length) {
      return response.status(400).send("Not Found: Sorry! Less than this");
    }
    return response.status(200).send(limitedMeals);
  }
  //--------
  //Respond with the json for all the meals

  return response.status(200).json(meals);
});

module.exports = router;

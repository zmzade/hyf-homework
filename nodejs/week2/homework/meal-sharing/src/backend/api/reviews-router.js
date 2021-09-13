const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
  try {
    const reviewData = reviews.filter(
      (reserv) => reserv.id == request.params.id
    );
    response.json(reviewData[0]);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    response.json(reviews);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;

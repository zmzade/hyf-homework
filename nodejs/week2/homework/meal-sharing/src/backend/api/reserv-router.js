const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/:id", async (request, response) => {
  try {
    const reservationData = reservations.filter(
      (reserv) => reserv.id == request.params.id
    );
    response.send(reservationData[0]);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    response.json(reservations);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;

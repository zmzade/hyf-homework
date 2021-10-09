const express = require("express");
const router = express.Router();
const knex = require("../database");

// -----------------------------------
// get queries

router.get("/", async (request, response) => {
  if (request.query.maxPrice) {
    const concertsPrice = await knex("concerts").where(
      "price",
      "<",
      request.query.maxPrice
    );
    return response.json(concertsPrice);
  }
  if (request.query.title) {
    const concertsTitle = await knex("concerts").where(
      "title",
      "like",
      `%${request.query.title.toLowerCase()}%`
    );

    return response.json(concertsTitle);
  }
  if (request.query.createdAfter) {
    const concertsPrice = await knex("concerts").where(
      "created_date",
      ">",
      new Date(request.query.createdAfter)
    );

    return response.json(concertsPrice);
  }
  if (request.query.band) {
    const concertBand = await knex("concerts").where(
      "band",
      `${request.query.band.toLowerCase()}`
    );
    return response.json(concertBand);
  }

  const concerts = await knex("concerts");
  return response.json(concerts);
});
// post method
//-------------------------------------------------
router.post("/", async (request, response) => {
  console.log("post working");
  try {
    const concertPosted = await knex("concerts").insert({
      title: "Black CAt",
      band: "Elton John",
      venue: "554",
      created_date: new Date(),
      performance_date: new Date(),
      price: 150,
    });
    response.json(concertPosted);
  } catch (error) {
    response.json(error);
  }
});

//prarams=id
// get, put, delete methods
//-----------------------------------------------------------------
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concertWithId = await knex("concerts")
      .select("*")
      .where("id", request.params.id);

    response.json(concertWithId);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    await knex("concerts")
      .where({ id: request.params.id })
      .update(request.body)
      .then((data) => response.json("data changed"));
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    await knex("concerts")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.json("data was deleted"));
  } catch (error) {
    throw error;
  }
});

module.exports = router;

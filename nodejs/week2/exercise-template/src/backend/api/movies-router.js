const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  //console.log(movies);
  const query = request.query;
  console.log(query);
  console.log(typeof query.beginYear);
  if (query.beginYear && query.endYear && query.minRating) {
    return response.send({
      data: [
        movies.filter(
          (movie) =>
            movie.year >= query.beginYear &&
            movie.year <= query.endYear &&
            movie.rating == query.minRating
        ),
      ],
    });
  }

  if (query.beginYear && query.endYear) {
    return response.send({
      data: [
        movies.filter(
          (movie) =>
            movie.year >= query.beginYear && movie.year <= query.endYear
        ),
      ],
    });
  }
  return response.send({ data: [movies] });
});
/*
router.get("/:id", async (request, response) => {
  const requestId = parseInt(request.params.id);
  response.send(movies.filter((movie) => movie.id == requestId));
}); */
router.get("/:id", async (request, response) => {
  response.send({
    data: [movies.filter((movie) => movie.id == request.params.id)],
  });
});
module.exports = router;

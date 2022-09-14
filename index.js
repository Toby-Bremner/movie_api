const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/movies", function (request, response) {
  let movies = [
    { title: "Shawshank Redemption", ratings: "9.2" },
    { title: "GodFather", ratings: "9.2" },
    { title: "Dark Knight", ratings: "9.0" },
    { title: "GodFather II", ratings: "9.0" },
    { title: "12 Angry Men", ratings: "8.9" },
    { title: "Schindler's List", ratings: "8.9" },
    { title: "Lord of the Rings; The Return of the King", ratings: "8.9" },
    { title: "Pulp Fiction", ratings: "9.2" },
    { title: "Lord of the Rings; the Fellowship of the Ring", ratings: "8.8" },
    { title: "The Good, the Bad, the Ugly", ratings: "8.8" },
  ];
  response.json(movies);
});

app.get("/", function (request, response) {
  response.send("Welcome to the greatest movies list!");
});

app.use(function (request, response, next) {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

app.use(function (err, request, response, next) {
  response.status(err.status || 500);
  return response.json({ message: err.message });
});

app.listen(3000, function () {
  console.log("server is running on port:3000");
});

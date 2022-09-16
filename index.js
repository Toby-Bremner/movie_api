const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (request, response) {
  response.send("Welcome to the greatest movies list!");
});

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

app.get("/movies/:title", function (request, response) {
  let title = request.params.title;
  response.json({ title, ratings: "9.2" });
});

app.get("/movies/genre/:name", function (req, res) {
  let genreName = req.params.name;
  res.json({ title: genreName, description: "genre of film" });
});

app.get("/movies/director/:name", function (req, res) {
  let directorName = req.params.name;
  res.json({
    name: directorName,
    description: "Director has directed many films",
  });
});

app.post("/users/register", function (req, res) {
  let userName = req.body.userName;
  let password = req.body.password;
  res.json({ message: `Welcome ${userName} to the best movies list` });
});

app.put("/users/:id", function (req, res) {
  let userName = req.body.userName;
  res.json({ message: `User ${userName} info updated` });
});

app.post("/users/movies/favorites", function (req, res) {
  res.json({ message: "Movie added to favorites list" });
});

app.delete("/users/movies/favorites/:id", function (req, res) {
  res.json({ message: "Movie removed from favorites list" });
});

app.delete("/users/:id", function (req, res) {
  res.json({ message: "Account deleted" });
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

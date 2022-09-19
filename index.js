const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Welcome to the greatest movies list!");
});

app.get("/movies", function (req, res) {
  let movies = [
    {
      Title: "Shawshank Redemtion",
      Description: "A falsely accused man tries to break out of prison",
      Director: {
        Name: "Frank Darabont",
        Bio: "Famous movie director",
        Birth: "1959",
      },
      Genre: {
        Name: "Drama",
        Description: "Prison Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "The Godfather",
      Description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      Director: {
        Name: "Francis Forc Coppola",
        Bio: "Famous movie director",
        Birth: "1939",
      },
      Genre: {
        Name: "Drama",
        Description: "Crime Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "The Dark Knight",
      Description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Director: {
        Name: "Cristopher Nolan",
        Bio: "Famous movie director",
        Birth: "1970",
      },
      Genre: {
        Name: "Action Drama",
        Description: "Superhero Action Crime Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "The Godfather: Part II",
      Description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      Director: {
        Name: "Francis Forc Coppola",
        Bio: "Famous movie director",
        Birth: "1939",
      },
      Genre: {
        Name: "Drama",
        Description: "Crime Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "12 Angry Men",
      Description:
        "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      Director: {
        Name: "Sidney Lumet",
        Bio: "Famous movie director",
        Birth: "1924",
      },
      Genre: {
        Name: "Drama",
        Description: "Jury Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "Schindler's List",
      Description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      Director: {
        Name: "Steven Spielberg",
        Bio: "Famous movie director",
        Birth: "1946",
      },
      Genre: {
        Name: "Drama",
        Description: "Historical Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      Director: {
        Name: "Peter Jackson",
        Bio: "Famous movie director",
        Birth: "1961",
      },
      Genre: {
        Name: "Action Adventure",
        Description: "Action Adeventure Medieval Fantasy",
      },
      ImageUrl: "",
    },
    {
      Title: "Pulp Fiction",
      Description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Director: {
        Name: "Quentin Tarantino",
        Bio: "Famous movie director",
        Birth: "1963",
      },
      Genre: {
        Name: "Drama",
        Description: "Crime Drama",
      },
      ImageUrl: "",
    },
    {
      Title: "The Lord of the Rings; The Fellowship of the Ring",
      Description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      Director: {
        Name: "Peter Jackson",
        Bio: "Famous movie director",
        Birth: "1961",
      },
      Genre: {
        Name: "Action Adventure",
        Description: "Action Adeventure Medieval Fantasy",
      },
      ImageUrl: "",
    },
    {
      Title: "The Good, the Bad and the Ugly",
      Description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      Director: {
        Name: "Sergio Leone",
        Bio: "Famous movie director",
        Birth: "1929",
      },
      Genre: {
        Name: "Western",
        Description: "Adventure Western",
      },
      ImageUrl: "",
    },
  ];
  res.json(movies);
});

app.get("/movies/:title", function (req, res) {
  res.json({
    Title: req.params.title,
    Description: "A falsely accused man tries to break out of prison",
    Director: {
      Name: "Frank Darabont",
      Bio: "Famous movie director",
      Birth: "1959",
    },
    Genre: {
      Name: "Drama",
      Description: "Guns a blazin",
    },
    ImageUrl: "",
  });
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
  let name = req.body.name;
  res.json({ message: `Welcome ${name} to the best movies list` });
});

app.put("/users/:id", function (req, res) {
  let name = req.body.name;
  res.json({ message: `User ${name} info updated` });
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

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({ message: err.message });
});

app.listen(3000, function () {
  console.log("server is running on port:3000");
});

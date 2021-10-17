const express = require("express");
const router = express.Router();
const moviesModel = require("./../models/movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res, next) => {
  // 1 utiliser un model pour read tous les movies
  moviesModel.find()
    .then((movie) => {
      res.render("movies.hbs", {
        css: ["movies.css"],
        movie
      });
    })
    .catch(next);
  // passer les movies à la view
  // dans la view {{#each}} pour les movies
});

router.get("/movies/:id", (req,res,next) => {
    const id = req.params.id;
    moviesModel.findById(id)
    .then((movies) =>{
        res.render("/oneMovie.hbs", 
        {movies})
    })
    .catch(next)
})

module.exports = router;

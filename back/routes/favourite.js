const express = require("express");
const router = express.Router();
const { Favourite } = require("../models");

router.post("/favourite/add", (req, res, next) => {
  const movie = {
    idFavourite: req.body.imdbID,
    title: req.body.Title,
    year: req.body.Year
  };
  Favourite.create(movie).then(favourite => res.send(favourite));
});

router.get("/favourite/delete/:id", (req, res) => {
  Favourite.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send(req.params.id));
});

module.exports = router;

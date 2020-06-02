const express = require("express");
const router = express.Router();
const { Favourite } = require("../models");

router.post("/add", (req, res, next) => {
 let year=req.body.Year
  const movie = {
    idFavourite: req.body.imdbID,
    title: req.body.Title,
    year: year.split("").slice(0,4).join(""),
    userId:req.user.id
  };
  Favourite.create(movie).then(favourite => res.send(favourite))
  .catch(err => {
    console.log(err, "error busqueda ");
    res.status(400).send("No se encontraron coincidencias");
  });
});

router.get("/delete/:id", (req, res) => {
  Favourite.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send(req.params.id));
});


router.get("/favourites/:userId", (req,res) => {
  Favourite.findAll({
    where: {
      userId: req.params.userId
    }
  })
    .then(fav => res.json(fav))
    .catch(err => {
      console.log(err, "error busqueda ");
      res.status(400).send("No se encontraron coincidencias");
    });
});



module.exports = router;

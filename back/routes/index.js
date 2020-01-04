const express = require('express')
const router = express()
const {User, Favourite} = require("../models")
const Sequelize = require('sequelize')

//users
router.post('/user/register', (req, res) => {
    if (req.body.email && req.body.pass) {
      console.log(req.body)
        User.create(req.body)
        .then(user => {
          res.send(user);
        })
       /*  .then(user =>
        // http://www.passportjs.org/docs/login/
            req.login(user, function(err) {
              if (err) {
                console.log(err);
              } else {
                res.status(201).send(user);
              }
            })
          )
          .catch(err => res.status(400).send(err)); */
    }else {
        res.status(400).send("Email and password are required.");
      }
})

//falta autenticacion de passport
router.post('/user/logIn', (req,res)=>{
  console.log("login")
  res.status(200).send("logueado");
})

router.post('/user/logOut', (req,res)=>{
  req.logout()
  res.sendStatus(202)
})

router.post('/user/:userId', ()=>{
  User.findAll({
    where:{
      id: req.params.userId
    }
  })
  .then(users => res.json(users))
  .catch(err=>{
    console.log(err, "error busqueda ")
    res.status(400).send("No se encontraron coincidencias");
  })
})


//favourites
router.post('/favourite/add', () => {
  console.log(req.body)
  Favourite.create(req.body)
    .then(favourite => {
      res.send(favourite);
    })
})



//elimina de favoritos y luego actualiza la lista
router.post('/favourite/delete/:favouriteId/:userId', () => {
  Favourite.destroy({
    where: {
      id: req.params.favouriteId
    }
  })
    .then(() => {
      User.findAll({
        where: {
          id: req.params.userId
        }
      })
    })
})


module.exports = router;
const express = require('express')
const router = express()
const {User, Favourite} = require("../models")
const Sequelize = require('sequelize')


router.post('/register', (req, res) => {
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

module.exports = router;
const express = require('express');
const router = new express.Router();
const {User} = require("../models")
const passport = require("../config/passport");

router.post('/user/register', (req, res) => {
    if (req.body.email && req.body.pass) {
        User.create(req.body)
        .then(user => {
          res.send(user);
        })
       /*  .then(user =>
            req.login(user, function(err) {
              if (err) {
                console.log(err);
              } else {
                res.status(201).send(user);
              }
            })
          )
          .catch(err => res.status(400).send(err));  */
    }else {
        res.status(400).send("Email and password are required.");
      }
})


/* router.post('/user/logIn',passport.authenticate("local"), (req,res)=>{
  res.status(200).send(req.user);
}) */

router.post('/user/logIn',function(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/movie',
    failureRedirect: '/login',
    failureFlash: true,
  }, function(err, user, info) {
    
    console.log(info.message)
    if (err) { return next(err); }
    if (!user) { 
        res.status(401);
        res.end(info.message);
        return;
    }
    createSendToken(req.user, res);
  })(req, res, next);
});


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

module.exports = router;

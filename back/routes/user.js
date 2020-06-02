const express = require('express');
const router = new express.Router();
const {User} = require("../models")
const passport = require("../config/passport");

router.post("/register", (req, res) => {
  User.create(req.body)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });

});


router.get("/logOut", function(req, res) {
  req.logout();
  res.send("logout")
});

/* router.post("/logIn", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
}); 
  */
 
router.post('/logIn',function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return  res.send(info)
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(req.user)
    });
  })(req, res, next);
});


router.get("/:userId", (req, res, next) => {
  User.findAll({
    where: {
      id: req.params.userId
    }
  })
    .then(users => res.json(users))
    .catch(err => {
      console.log(err, "error busqueda ");
      res.status(400).send("No se encontraron coincidencias");
    });
});

/* 
router.get('/me', (req, res) => {
  res.send(req.user)

})
  */

  router.get("/search/:userMail", (req, res, next) => {
  User.findAll({
    where: {
      email: req.params.userMail
    }
  })
    .then(users => res.json(users))
    .catch(err => {
      console.log(err, "error busqueda ");
      res.status(400).send("No se encontraron coincidencias");
    });
});

module.exports = router;

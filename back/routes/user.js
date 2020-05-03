const express = require('express');
const router = new express.Router();
const {User} = require("../models")
const passport = require("../config/passport");

router.post("/register", (req, res) => {
  if (req.body.email && req.body.password) {
    User.create(req.body).then(user => {
      res.send(user);
    });
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
  } else {
    res.status(400).send("Email and password are required.");
  }
});


router.get("/logOut", function(req, res) {
  req.logout();
  res.send("logged Out"); 
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




/* router.post("/:userId", () => {
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
});*/

router.get('/me', (req, res) => {
  res.send(req.user)

})
 


module.exports = router;

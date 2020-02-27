const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {User }= require("../models");

passport.use(new LocalStrategy(
  {
      usernameField: 'email',
      passwordField: 'pass'
  },
  function (email, pass, done) {
      User.findOne({ where: { email: email } })
          .then(user => {
              if (!user) {
                  return done(null, false, { message: 'Incorrect email.' });
              }
              if (!user.authenticate(pass)) {
                  return done(null, false, { message: 'Incorrect password.' });
              }
              return done(null, user);
          })
          .catch(done);
  }
));


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
      .then(user => done(null, user))
});


module.exports = passport
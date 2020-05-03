const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User= require("../models/user");


passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'pass'
  },
  function (username, password, done) {
      User.findOne({ where: { email: username } })
          .then(user => {
              if (!user) {
                  return done(null, false, { message: 'Incorrect email' });
              }
              if (!user.authenticate(password)) {
                  return done(null, false, { message: 'Incorrect password' });
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

 
 
 module.exports = passport;
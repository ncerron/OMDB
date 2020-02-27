const Sequelize = require('sequelize');
const db = require('../db')
const crypto = require('crypto')

class User extends Sequelize.Model {}
User.init({
  email:{
      type: Sequelize.STRING,
      allowNull:false
  },
  salt: {
    type:  Sequelize.STRING
  },
  pass:{
    type: Sequelize.STRING,
    allowNull:false
  }
},{
    sequelize:db, 
    modelName:'user'
})

User.addHook("beforeCreate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.pass = user.hashPassword(user.pass);
});

User.addHook("beforeUpdate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.pass = user.hashPassword(user.pass);
});

User.prototype.hashPassword = function(pass) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(pass)
    .digest("hex");
};
User.prototype.authenticate = function(pass) {
  return this.pass === this.hashPassword(pass);
};

module.exports= User;
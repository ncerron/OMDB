const Sequelize = require('sequelize');
const db = require('../db')
const Crypto = require('crypto')

class User extends Sequelize.Model {}
User.init({
  email:{
      type: Sequelize.STRING,
      allowNull:false
  },
  salt: {
    type:  Sequelize.STRING
  },
  password:{
    type: Sequelize.STRING,
    allowNull:false
  }
},{
    sequelize:db, 
    modelName:'user'
})

User.beforeCreate((user) => {
  user.salt = Crypto.randomBytes(20).toString('hex');
  user.password = Crypto.createHmac('sha1', user.salt).update(user.password).digest('hex');
});
User.prototype.hashFunction = function (password) {
  return Crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};
User.prototype.authenticate = function (password) {
  return this.hashFunction(password) === this.password;
};


module.exports = User
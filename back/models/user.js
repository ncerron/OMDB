const Sequelize = require('sequelize');
const db = require('../db')

class User extends Sequelize.Model {}
User.init({
  email:{
      type: Sequelize.STRING,
      allowNull:false
  },
  pass:{
    type: Sequelize.STRING,
    allowNull:false
  }
},{
    sequelize:db, 
    modelName:'user'
})

module.exports= User;
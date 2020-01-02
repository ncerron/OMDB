const Favourite = require('./favourite')
const User = require('./user')

User.hasMany(Favourite, {as:"favourite"})

module.exports={User, Favourite}
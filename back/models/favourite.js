const Sequelize = require('sequelize')
const db = require('../db')

class Favourite extends Sequelize.Model { }
Favourite.init({
    idFavourite: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize: db,
    modelName: 'favourite'
})

module.exports = Favourite
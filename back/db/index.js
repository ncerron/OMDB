const Sequelize = require("sequelize");
const url ="postgres://postgres:admin@localhost:5432/omdb"

const db = new Sequelize(url, {
  logging: false,
});

module.exports = db;

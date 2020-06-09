const Sequelize = require("sequelize");
const url = process.env.DATABASE_URL || "postgres://postgres:admin@localhost:5432/omdb"

const db = new Sequelize(url, {
  logging: false,
});

module.exports = db;

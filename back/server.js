const express = require('express');
const app = express();
const path = require("path");
const db = require('./db')
const bodyParser = require("body-parser");
const passport = require('passport')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const cors = require('cors')

app.use(cors())

const port= process.env.PORT || 3000

require('dotenv').config()


app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'kitty',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session())

app.use(morgan("dev"));
app.use("/api", require("./routes"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

db.sync({force:false})
.then(
  ()=> {
    console.log("conectando a base de datos")
    app.listen(port,'0.0.0.0')
  })
  .catch(error => {console.log(error)})

  module.exports = app;
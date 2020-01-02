const express = require('express');
const app = express();
const path = require("path");
const db = require('./db')
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", routes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



db.sync({force:false})
.then(
  ()=> {
    console.log("conectando a base de datos")
    app.listen(3000)
  })
  .catch(error => {console.log(error)})


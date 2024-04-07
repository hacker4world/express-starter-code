const express = require("express");
const bodyParser = require("body-parser");
const utilisateurRouter = require("./router/utilisateur.router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/utilisateur", utilisateurRouter);

app.listen(8080, function () {
  console.log("Serveur demarre");
});

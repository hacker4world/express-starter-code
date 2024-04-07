const express = require("express");
const utilisateurs = require("../utilisateurs");
const login = require("../controllers/login.controller");
const signup = require("../controllers/signup.controller");

const utilisateurRouter = express.Router();

utilisateurRouter.post("/login", login);

utilisateurRouter.post("/signup", signup);

module.exports = utilisateurRouter;

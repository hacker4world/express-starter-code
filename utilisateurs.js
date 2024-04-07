const Utilisateur = require("./models/utilisateur");

const utilisateurs = [
  new Utilisateur("mohamed", "mohamed@gmail.com", "12345"),
  new Utilisateur("youssef", "youssef@gmail.com", "12345678"),
];

module.exports = utilisateurs;

const utilisateurs = require("../utilisateurs");

function login(request, response) {
  const data = request.body;

  const compte = utilisateurs.find(function (utilisateur) {
    return (
      utilisateur.email === data.email &&
      utilisateur.passoword === data.password
    );
  });

  if (compte == undefined) response.send("mot de passe incorrect");
  else response.json(compte);
}

module.exports = login;

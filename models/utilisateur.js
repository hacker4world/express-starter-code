class Utilisateur {
  username;
  email;
  passoword;

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.passoword = password;
  }
}

module.exports = Utilisateur;

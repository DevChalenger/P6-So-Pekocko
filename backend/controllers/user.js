const bcrypt = require("bcrypt"); //Importation du module bcrypt pour le hashage des mots de passes//
const jwt = require("jsonwebtoken");
const cryptojs = require("crypto-js");

const User = require("../models/user");
const secret = require("../secret/secret");

exports.signup = (req, res, next) => {
  const emailCrypted = cryptojs
    .HmacSHA256(req.body.email, secret.emailSecret)
    .toString();

  bcrypt
    .hash(req.body.password, 10)

    .then((hash) => {
      const user = new User({
        email: emailCrypted,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  const emailCrypted = cryptojs
    .HmacSHA256(req.body.email, secret.emailSecret)
    .toString();

  User.findOne({ email: emailCrypted })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, secret.authSecret, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//Middleware d'authentification pour les routes //
const jwt = require("jsonwebtoken");
const secret = require("../secret/secret");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //On prend le deuxième argument après l'espace dans le header-autorization//
    const decodedToken = jwt.verify(token, secret.authSecret); //On verifie la requête avec la clé secret//
    const userId = decodedToken.userId; //On prend l'identifiant de la requête//
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

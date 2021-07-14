const passwordShema = require("../models/passwordShema");

module.exports = (req, res, next) => {
  if (!passwordShema.validate(req.body.password)) {
    res
      .status(400)
      .json({
        message:
          "Le mot de passe doit contenir 8 caractères minimum avec une majuscule, une minuscule et 2 chiffres  ",
      });
  } else {
    next();
  }
};

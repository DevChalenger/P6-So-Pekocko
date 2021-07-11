const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
//Schema Utilisateurs//
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }, //l'email est enrengistré qu'une seule fois dans la basse de donnés//
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator); //Plugin pour gerer les erreurs d'email unique//

module.exports = mongoose.model("User", userSchema);

const express = require("express"); //Importation du module express//
const bodyParser = require("body-parser"); //Importation du module body-parser//
const mongoose = require("mongoose"); //Importation du module mongoose//
const path = require("path"); //Importation du module path//
const helmet = require("helmet");
const nocache = require("nocache");
const userRoutes = require("./routes/user"); //Importation des routes users//
const saucesRoutes = require("./routes/sauce"); //Importation des routes sauces//

require("dotenv").config();

mongoose //Connexion à la base de donnés mongoose //
  .connect(
    `${process.env.IdMongMentor}/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
//Cors//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(nocache());
app.use(helmet());

//--Routes--//
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes); //middleware pour les routes sauces//
app.use("/api/auth", userRoutes); //middleware pour les routes users//

module.exports = app;

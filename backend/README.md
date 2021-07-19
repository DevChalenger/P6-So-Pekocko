## Project Cloning

Pour pouvoir cloné le projet vous aller devoir installer git sur votre machine "https://git-scm.com/downloads" ouvrez git bash et dirigé vous vers l'endroit où vous voulez enrengistré le projet à partir de git bash, ensuite à partir de git bash saisissez :

- git init,
- git clone "https://github.com/DevChalenger/P6-So-Pekocko.git"

Sinon télécharger le répertoire au format zip à partir du bouton code et il faudra extraire le fichier à l'emplacement de votre choix.

## Development server backend

Pour pouvoir lancer le backend vous aller devoir installé nodejs "https://nodejs.org/en/"(installé la version recomandé), dés que l'instalation est terminé dirigé vous vers le répertoire du projet dans le dossier "backend" à partir d'un terminal et saisir "npm install" sa installera toutes les dépendances du projet(package.json) dans votre répertoire(dans un fichier node_modules), À la fin de l'instalation des dépendances saisir nodemon dans le terminal pour pouvoir lancer le backend le serveur sera héberger sur le port "http://localhost:3000/".

## Connecion DataBase

La connection à la base de donnés devrait avoir besoin du fichier env qui a été envoyer dans le livrable, copier le contenu qui est à l'intérieur et créer un fichier ".env" à la racine du fichier backend (Le fichier contient les droits d'administrateur donc le nom de l'utilisateur avec son mot de passe ).

## KEYS SECRET

Pour activé les clés (email et token) vous aurez besoin du fichier secret qui est déposé dans le livrable, copier le fichier et enrengistré le à la racine du fichier backend .

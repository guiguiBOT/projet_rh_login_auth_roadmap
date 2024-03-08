// Création du serveur Express.
// Importation du module Express et assignation à la variable constante express.
const express = require('express');
// Importation du module mongoose et assignation à la variable constante mongoose.
const mongoose = require('mongoose');
// Importation du module Express-session et assignation à la variable constante session.
const session = require('express-session');
// Importation du module twig et assignation à la variable constante twig.
const twig = require('twig');
// Importation du module userRouter et assignation à la variable constante userRouter.
const userRouter = require('./src/routers/userRouter');
// Importation de dotenv.
require('dotenv').config();
// Création d'une instance d'application Express.
const app = express();
// Configuration d'express.static pour servir les fichiers statiques.
app.use(express.static('./assets'));
// Ajout de la fonction midleware express.urlencoded pour traiter les données des formulaires.
app.use(express.urlencoded({ extended: true }));
// Configuration du moteur de rendu twig.
app.set('view engine', 'twig');
// Configuration du répertoire des vues.
app.set('views', './views');
// Configuration d'express-session.
app.use(session({
    secret: 'my_secret_key_1517',
    resave: false,
    saveUninitialized: true,
}));
// Configuration du midleware userRouter.
app.use(userRouter);
// Configuration du port d'écoute du serveur.
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on port ${process.env.PORT}`);
    }
});
// Connexion à la base de données MongoDB en utilisant la variable d'environnement MONGO_URI
// stockée dans le fichier .env.
mongoose.connect(process.env.MONGO_URI);

// Vérification de la connexion à la base de données.
// mongoose.connection est une propriété qui représente la connexion MongoDB par défaut
// du module mongoose. On stock donc cette connexion dans une variable constante dbConnexion.
// Cette variable dbConnexion est un objet qui représente la connexion à la base de données.
// On peut donc utiliser cette variable pour gérer la connexion à la base de données.
const dbConnexion = mongoose.connection;

// Gestion des erreurs de connexion à la base de données.
dbConnexion.on('error', console.error.bind(console, 'connection error:'));
// Gestion de la connexion réussie à la base de données.
dbConnexion.once('open', () => {
    console.log('Connected to the database : ' + process.env.MONGO_URI);
});


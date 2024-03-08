// --------------------------------------------------------
// ------------------------ETAPE 1-------------------------
// ----------------INSTALLATION DE NODEJS------------------
// --------------------------------------------------------
// Lien pour l'installation de NodeJS sous Windows : https://grafikart.fr/tutoriels/nodejs-install-windows-2081
// C'est à cette étape que le noyau de NodJS est installé, ainsi que le corepack manager et npm le 
// gestionnaire de packages.
// C'est également à cette étape que l'on va ajouter NodeJs au path du système d'exploitation, ce qui va ensuite
// nous permettre d'utiliser les commandes node et npm depuis le terminal.
// --------------------------------------------------------
//
// --------------------------------------------------------
// ------------------------ETAPE 2-------------------------
// --------INSTALLATION DES PACKAGES DE LA MEN STACK-------
// --------------------------------------------------------
// pour commencer un projet
// commande : npm init
// on répond aux questions
// le fichier package.json est créé
// --------------------------------------------------------
// installation du framework Express.js
// commande: npm i express
// pas besoin d'utiliser --save en flag depuis npm 5.5.0 la dépendance est automatiquement ajoutée dans package.json
// le répertoire node_modules est créé
// Le fichier package-lock.json est créé
//
// Le framework Express.js permet : 
//
//      - D'écrire des fonctions de traitement pour différentes requêtes HTTP répondant à différentes URI par le 
//        biais de routes.
//      - De gérer les moteurs de rendu de "vues" (twig par exemple) afin de générer des réponses en insérant 
//        des données dans les modèles ("templates").
//      - De configurer certains paramètres d'application comme le port à utiliser à la connexion et l'emplacement 
//        des modèles ("templates") nécessaire à la mise en forme de la réponse.
//      - D'ajouter des requètes de traitement ("middleware" ou intergiciels) où vous le voulez dans le tunnel qui 
//        gère la requête.
// --------------------------------------------------------
// Installation du package Mongoose
// Commande : npm i Mongoose
// 
// Mongoose c'est quoi :
//
// Mongoose va simplement servir de passerelle entre le serveur NodeJS et la base de donnée MongoDB.
// --------------------------------------------------------
//
// --------------------------------------------------------
// !!! Desormais ce qu'on appelle la MEN stack est installée. !!!
// !!! Nous pouvons créer un serveur Express et le connecter à la base de donnée MongoDB. !!!
// --------------------------------------------------------
//
// --------------------------------------------------------
// -----------------------ETAPE 3--------------------------
// --------------CONFIGURATION DU SERVEUR------------------
// --------------------------------------------------------
// Dans un premier temps nous allons installer le package dotenv à l'aide de la 
// commande : npm i dotenv
// Ce package permet pour des raisons de sécurité de stoker les variables d'environnement commme l'adresse de la 
// base de données où le port d'écoute du serveur. Ces variables seront stockées dans un fichier .env à la racine 
// du projet de la manière suivante :
// PORT = 3000     Par convention les variables d'environnement sont nommées en lettres capitales.
// Ces variables pourront ensuite être appelées de la manière suivante :
// process.env.VARIABLE.
// 
// Nous allons également installer express-session à l'aide de la commande : 
// npm i express-session
// express-session est un middleware d'Express.js qui permet de gérer les données de session
// entre les requêtes HTTP. Une session est un endroit où vous pouvez stocker des données pour les utilisateurs
// et y accéder à travers les requêtes HTTP.
// Apparté sur les middlewares : Les fonctions middleware sont des fonctions qui ont accès à l'objet de requête
// (req), à l'objet de réponse (res) et à la fonction middleware suivante dans le cycle de requête-réponse de
// l'application. La fonction middleware suivante est généralement désignée par une variable nommée next.
// --------------------------------------------------------
// ----------------EDITION DE SERVER.JS--------------------
// --------------------------------------------------------
// Importation du module Express et assignation dans une variable constante express, en effet Express.js est un 
// framework qui contient entre autre un module express...
// const express = require('express');
//
// Importation du module mongoose et assignation dans une variable constante mongoose
// const mongoose = require('mongoose');
//
// Importation du module Express-session et assignation dans une variable constante session.
// const session = require('express-session');
//
// Importation de dotenv
// require('dotenv').config();
//
// Création d'une instance d'application Express, la fonction express() est une fonction de haut niveau exportée 
// par le module Express 
// app est un "OBJET" qui est ensuite utilisé pour configurer le serveur, définir les routes 
// et écouter les requètes entrantes. Ceci est le point de départ de toute application Express !
// Le serveur est en fait notre application, c'est ici que le mot monobloc prend son sens, l'application est à 
// la fois, le serveur, l'application, le moteur de rendu, le gestionnaire de requêtes. Cet "OBJET" app est 
// donc le coeur de notre application.
// const app = express();
// 
// Configuration d'express.static pour servir les fichiers statiques.
// La fonction express.static() est une fonction intégrée d'Express.js qui est utilisée pour servir les fichiers
// statiques tels que les images, les fichiers CSS, les fichiers JavaScript, etc.
// Cette fonction prend en argument le chemin du dossier où se trouvent les fichiers statiques.
// app.use(express.static('./assets'));
// 
// Ajout de la fonction midleware express.urlencoded pour traiter les données des formulaires.
// La fonction express.urlencoded() est une fonction intégrée d'Express.js qui est utilisée pour analyser les
// données des formulaires envoyées dans le corps de la requête HTTP.
// Cette fonction prend en argument un objet de configuration qui spécifie comment les données des formulaires
// doivent être analysées.
//
// Configuration d'express-session
// Ici nous utilisons la méthode use() de l'objet app pour ajouter le middleware express-session à notre application.
// La méthode use() est utilisée pour ajouter des fonctions middleware à l'application Express.
// La méthode use() prend en argument une fonction middleware qui sera exécutée pour chaque requête entrante.
// La fonction session(() est une fonction middleware d'Express.js qui est utilisée pour gérer les données de
// session entre les requêtes HTTP.
// La fonction session() prend en argument un objet de configuration qui spécifie comment les données de session
// doivent être gérées.
// Ici nous avons configuré la fonction session() pour utiliser un secret pour signer les cookies de session.
// Nous avons également configuré la fonction session() pour ne pas sauvegarder les sessions qui n'ont pas été
// modifiées.
// Nous avons également configuré la fonction session() pour sauvegarder les sessions même si elles n'ont pas été
// initialisées.
// app.use(session({
//     secret: 'my_secret_key_1517',
//     resave: true,
//     saveUninitialized: true
// }));
// 
// Configuration du port d'écoute du serveur
// La fonction app.listen() est utilisée pour lier et écouter les connexions sur l'hôte et le port spécifiés.
// Cette fonction est essentiellement utilisée pour démarrer un serveur Express et est souvent utilisée en
// conjonction avec la fonction express().
// La fonction app.listen() prend en premier argument le port d'écoute du serveur, et en second argument une
// fonction de callback qui sera exécutée une fois que le serveur est démarré.
// Si il y a une erreur lors du démarrage du serveur, cette erreur sera passée en argument à la fonction de
// callback et sera affichée dans la console. Si il n'y a pas d'erreur, un message de confirmation sera affiché
// dans la console.
// On peut ainsi executer n'importe quelle fonction de callback une fois que le serveur est démarré.
// app.listen(process.env.PORT, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Server is listening on port ${process.env.PORT}`);
//     }
// });
// 
// Connexion à la base de données MongoDB en utilisant la variable d'environnement MONGO_URI stockée dans le
// fichier .env
// mongoose.connect(process.env.MONGO_URI);

// Vérification de la connexion à la base de données.
// mongoose.connection est une propriété qui représente la connexion MongoDB par défaut
// du module mongoose. On stock donc cette connexion dans une variable constante dbConnexion.
// Cette variable db est un objet qui représente la connexion à la base de données.
// On peut donc utiliser cette variable pour gérer la connexion à la base de données.
// const dbConnexion = mongoose.connection;
// 
// Gestion des erreurs de connexion à la base de données.
// dbConnexion.on('error', console.error.bind(console, 'connection error:'));
// Gestion de la connexion réussie à la base de données.
// dbConnexion.once('open', () => {
//     console.log('Connected to the database : ' + process.env.MONGO_URI);
// });
// --------------------------------------------------------
// -------------FIN DE L'EDITION DE SERVER.JS--------------
// --------------------------------------------------------
// Dans la console, à la racine du projet, on peut maintenant lancer le serveur avec la commande :
// node server.js
// Si tout est en ordre, le message "Server is listening on port 3000" s'affiche dans la console,
// ainsi que le message "Connected to the database : mongodb://localhost:27017/ma_base_de_donnees".
// De la même manière si il y a une erreur, celle-ci s'affiche dans la console.
// --------------------------------------------------------
//
// --------------------------------------------------------
// -----------------------ETAPE 4--------------------------
// --------INSTALLATION DES MODULES COMPLEMENTAIRES--------
// -------------Twig, authguard, bcrypt, multer------------
// --------------------------------------------------------
// INSTALLATION DU PACKAGE TWIG
// Commande : npm i twig
// Description : Twig est un moteur de rendu de "vues" pour Express.js. Il permet de générer des 
// réponses en insérant des données dans les modèles ("templates").
// -------------------------------------------------------------------
// ------EDITON DE SERVER.JS (AJOUT DE LA CONFIGURATION DE TWIG)------
// -------------------------------------------------------------------
// const twig = require('twig');
// app.set('view engine', 'twig');
// app.set('views', './views');
// Attention .set est une méthode d'Express.js qui permet de configurer les paramètres de l'applications.
// les commandes app.set viennent après la création de l'application Express. (const app = express();)
// nous avons configuré Express pour utiliser le moteur de rendu Twig. Nous avons
// ensuite défini le dossier où se trouvent les modèles ("templates") et nous avons créé une route
// pour la page d'accueil.
// -------------------------------------------------------------------
// -----------------FIN DE L'EDITION DE SERVER.JS---------------------
// -------------------------------------------------------------------
// Voici comment utiliser la route pour la page d'accueil définie dans le fichier server.js
// app.get('/', (req, res) => {
//     res.render('index', { title: 'Twig' });
// });
// Lorsque la route est appelée ici '/', Express va chercher le modèle "index.twig"
// directement dans le dossier "views" car nous avons configuré le dossier par défaut qui contient les 
// vues dans le fichier server.js juste avant et va l'envoyer au moteur de rendu Twig. Le moteur de 
// rendu Twig va insérer les données { title: 'Twig' } dans le modèle et va générer une réponse HTML 
// qui sera envoyée au client.
// --------------------------------------------------------
// 
// --------------------------------------------------------
// INSTALLATION DU PACKAGE BCRYPT
// Commande : npm i bcrypt
// Description : Bcrypt est un algorithme de hachage de mot de passe qui utilise un salt pour 
// protéger les mots de passe. Il est très utilisé pour sécuriser les mots de passe dans les
// bases de données.
// Pour l'utiliser, il faudra l'importer dans le fichier où l'on souhaite l'utiliser.
// Typiquement dans un fichier de routes qui gère l'inscription d'un utilisateur.
// de la manière suivante : const bcrypt = require('bcrypt');
// --------------------------------------------------------
// 
// --------------------------------------------------------
// INSTALLATION DU PACKAGE MULTER
// Commande : npm i multer
// Description : Multer est un middleware qui permet de gérer les fichiers uploadés par les
// utilisateurs. Il est utilisé pour gérer les fichiers uploadés dans les requêtes HTTP.
// Il permet notamment de spécifier le dossier de destination des fichiers uploadés, de spécifier
// le nom du fichier uploadé, de spécifier le nombre maximum de fichiers uploadés, de spécifier
// la taille maximum des fichiers uploadés, etc.
// Nous allons créer un fichier multer.js dans le répertoire services pour configurer multer.
// ------------------------------------------------------------
// -------EDITION DE MULTER.JS (CONFIGURATION DE MULTER)-------
// ------------------------------------------------------------
// Importation du module multer.
// const multer = require('multer');
// Création d'un objet de configuration de multer. le mimetype est un tableau qui contient les types
// de fichiers acceptés.
// const mimeType = [
//     'image/png',
//     'image/jpeg',
//     'image/jpg',
// ];
// Configuration du répertoire de destination des fichiers uploadés et du nom des fichiers uploadés.
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './assets/img/uploads');
//     },
//     filename: function (req, file, cb) {
//         let extarray = file.mimetype.split('/');
//         let extension = extarray[extarray.length - 1];
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
//     }
// });
// --------------------------------------------------------------
// -----------------FIN DE L'EDITION DE MULTER.JS----------------
// --------------------------------------------------------------
// 
// CONFIGURATION DU MIDDLEWARE AUTHGUARD
// Authguard est un middleware qui permet de protéger les routes d'une application Express.
// Il est utilisé pour vérifier si un utilisateur est authentifié avant de lui permettre d'accéder
// à une route protégée. Si l'utilisateur n'est pas authentifié, il sera redirigé vers une page de
// connexion. Si l'utilisateur est authentifié, il sera autorisé à accéder à la route protégée.
// Nous allons créer un fichier authguard.js dans le répertoire services pour configurer authguard.
// ------------------------------------------------------------------
// -------EDITION DE AUTHGUARD.JS (CONFIGURATION DE AUTHGUARD)-------
// ------------------------------------------------------------------
// Importation du module userModel.
// Nous expliquerons plus tard ce qu'est le module userModel.
// const userModel = require('../src/models/userModel');
// 
// Configuration du middleware authguard.
// const authguard = async (req, res, next) => {
// try {
//     if (req.session.user) {
//         let user = await userModel.findOne({ email: req.session.user.email });
//         if (user) {
//             return next();
//         }
//     }
//     throw new Error('Unauthorized');
// } catch (error) {
//     console.error(error.message);
//     res.status(401).render('../views/login/login.twig',
//         {
//             title: "Page de connexion",
//             errorAuth: error.message
//         });
//     }
// };
//
// ------------------------------------------------------------------
// -----------------FIN DE L'EDITION DE AUTHGUARD.JS-----------------
// ------------------------------------------------------------------
// Pour utiliser la fonction authguard dans une route, il suffit de l'importer dans le 
// fichier, par exemple userRouter.js de la manière suivante :
// const authguard = require('../../services/authguard');
// Pour l'utiliser sur une route, il suffit de l'ajouter comme middleware de la manière 
// suivante : router.get('/profile', authguard, (req, res) => { ... });
// 
// Nous allons détailler ici quelques notions en expliquant le code de la fonction
// authguard. Elle sont importantes pour comprendre le fonctionnement général
// d'une application Express/NodeJS/MongoDB/mongoose.

// EXPICATION DU CODE DE LA FONCTION AUTHGUARD:
// La fonction authguard est une fonction middleware qui prend en argument les 
// objets req, res et next. Cette fonction middleware est utilisée pour protéger
// les routes d'une application Express. Elle est utilisée pour vérifier si un
// utilisateur est authentifié avant de lui permettre d'accéder à une route protégée.
// Si l'utilisateur n'est pas authentifié, il sera redirigé vers une page de connexion.
// Si l'utilisateur est authentifié, il sera autorisé à accéder à la route protégée.
// Ici la fonction authguard commence par vérifier si l'objet req.session.user existe.
// C'est le middle ware express-session qui crée cet objet req.session.user après une
// connection réussie.
// Si l'objet req.session.user existe, cela signifie que l'utilisateur est authentifié.
// La fonction authguard utilise ensuite l'objet req.session.user pour rechercher 
// l'utilisateur dans la base de données en utilisant la méthode findOne() du modèle
// userModel. Si l'utilisateur est trouvé dans la base de données, ici 
// par rapport à son adresse email, la fonction authguard appelle la fonction next()
// pour passer le contrôle à la fonction middleware suivante dans le cycle de
// requête-réponse de l'application. Si l'utilisateur n'est pas trouvé dans la base
// de données, la fonction authguard lance une erreur avec le message "Unauthorized".
// La fonction authguard utilise ensuite la méthode status() de l'objet res pour
// définir le code d'état de la réponse HTTP à 401 (Unauthorized). La fonction
// authguard utilise ensuite la méthode render() de l'objet res pour afficher la
// page de connexion avec le message d'erreur "Unauthorized".

// Explication de l'instruction suivante en particulier :
// userModel.findOne({ email: req.session.user.email });

// Cette instruction est une methode mongoose qui retourne le premier document qui
// correspond aux critères de recherche spécifiés. Dans ce cas elle recherche un 
// documment dans la base de données où le champ email correspond à req.session.user.email.
// req.session.user.email accède à la propriété email de l'objet user stocké dans la session.
// Cet objet user est généralement défini après une connexion réussie.
// Le resultat de cette instruction est une promesse qui retourne un document Mongodb stocké
// dans la variable user si la comparaison est réussie sinon elle retourne null.
// Dés lors on pourra accéder aux informations contenues dans la base de données pour cet 
// utilisateur (document mongoDB) en utilisant la variable user.
// Comme ceci : user.nom, user.prenom, user.email, user.password, etc.
// ------------------------------------------------------------------
// Explications sur les objets req et res :
// L'objet req est un objet qui représente la requête HTTP entrante. Il contient des informations
// sur la requête HTTP telle que l'URL, la méthode, les en-têtes, les paramètres de requête, etc.
// L'objet res est un objet qui représente la réponse HTTP qui sera envoyée au client. Il contient
// des méthodes pour envoyer la réponse HTTP au client telle que la méthode send(), la méthode
// json(), la méthode render(), etc.
// ------------------------------------------------------------------
// 
// --------------------------------------------------------
// -----------------------ETAPE 5--------------------------
// ------------CREATION DU MODELE userModel----------------
// --------------------------------------------------------
// Le modèle userModel est un modèle Mongoose qui représente un document dans la base de données.
// Le modèle userModel est utilisé pour interagir avec la collection users dans la base de données.
// La collection users est une collection MongoDB qui stocke les documents des utilisateurs.
// Nous allons créer un fichier userModel.js dans le répertoire models pour définir le modèle userModel.
// Avant toute chose nous allons installer le package validator à l'aide de la commande :
// npm i validator
// Ce package est utilisé pour valider les données des formulaires. Notamment pour valider les emails.
// ainsi que les mots de passe.
// Pour l'utiliser dans notre fichier userModel.js, il suffit de l'importer de la manière suivante :
// const validator = require('validator');
// Nous allons également utiliser dans notre fichier userModel.js le package bcrypt que nous avons
// installé précédemment. Pour l'utiliser dans notre fichier userModel.js, il suffit de l'importer de
// la manière suivante :
// const bcrypt = require('bcrypt');
// ------------------------------------------------------------------
// -------EDITION DE USERMODEL.JS (DEFINITION DU MODELE userModel)-------
// ------------------------------------------------------------------
// Importation du module mongoose.
// const mongoose = require('mongoose');
// Importation du module validator.
// const validator = require('validator');
// Importation du module bcrypt.
// const bcrypt = require('bcrypt');
// Création du schéma userSchema.
// const userSchema = mongoose.Schema({
//     companyName: {
//         type: String,
//         required: [true, 'le nom de l\'entreprise est requis'],
//     },
//     email: {
//         type: String,
//         required: [true, 'l\'email est requis'],
//         unique: true,
//         lowercase: true,
//         validate: [validator.isEmail, 'l\'email est invalide'],
//     },
//     password: {
//         type: String,
//         required: [true, 'le mot de passe est requis'],
//         minlength: [8, 'le mot de passe doit contenir au moins 8 caractères'],
//     },
//     registryNumber: {
//         type: String,
//         required: [true, 'le numéro de registre est requis'],
//     },
//     head: {
//         type: String,
//         required: [true, 'le nom du directeur est requis'],
//     },
//     });
// 
// Création d'une méthode de hachage de mot de passe pour le schéma userSchema.
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
// });
//
// Création du modele userModel.
// const userModel = mongoose.model('users', userSchema);
//
// Exportation du modele userModel.
// module.exports = userModel;
// ------------------------------------------------------------------
// -----------------FIN DE L'EDITION DE USERMODEL.JS-----------------
// ------------------------------------------------------------------
// Explication sur les schémas Mongoose :
// Un schéma Mongoose est un objet qui définit la structure des documents stockés 
// dans une collection MongoDB.
// Il définit les champs et les types de données de ces champs.
// Il définit également les contraintes de validation pour ces champs.
// Un schéma Mongoose est utilisé pour créer un modèle Mongoose.
// Ici le modele userModel est créé à partir du schéma userSchema.
// Ce modèle est utilisé pour interagir avec la collection MongoDB.

// Explication du code de notre userModel :
//  Ici nous avons importé les modules mongoose, validator et bcrypt.
// Nous avons ensuite créé un schéma userSchema avec les champs companyName, email, 
// password, registryNumber, head.
// Nous avons également ajouté des contraintes de validation pour les champs email et
// password.
// Nous avons également ajouté une méthode de hachage de mot de passe pour le schéma
// userSchema. Cette méthode de hachage de mot de passe est utilisée pour hacher le
// mot de passe avant de l'enregistrer dans la base de données.
// Nous avons ensuite créé le modele userModel à partir du schéma userSchema.
// Nous avons ensuite exporté le modele userModel pour l'utiliser dans d'autres fichiers.
// ------------------------------------------------------------------
// Le schema Mongoose pour créer un utilisateur dans la base de données
// est donc maintenant défini. Dés lors il est possible de créer un utilisateur
// en utilisant ce schema.
// Avant de poursuivre il convient de tester le serveur pour vérifier que tout
// fonctionne correctement.
// Démarrons le serveur avec la commande : node server.js à la racine du projet.
// Nous allons créer notre première route qui servira a ajouter un utilisateur
// dans la base de données. Pour cela nous allons créer un fichier userRouter.js
// dans le répertoire routers.
// Ensuite nous testerons la route en utilisant le logiciel Postman en prenant soin 
// de bien configurer le body de la requête au format x-www-form-urlencoded.
// la key est le nom du champ de la base de données et la value est la valeur à
// insérer dans ce champ.
// -------------------------------------------------------------------
// -----------------------------ETAPE 6-------------------------------
// -------------CREATION DE LA ROUTE DANS userRouter.js---------------
// ------Pour ajouter un utilisateur dans la base de données----------
// ------------------Inscription d'un utilisateur---------------------
// -------------------------------------------------------------------
// C'est le moment d'expliquer un peu plus en détail ce qu'est une route.
// Une route est une fonction de traitement qui répond à une requête HTTP
// pour une URI spécifique (Uniform Resource Identifier). Une route est
// utilisée pour définir les actions à effectuer lorsque le client envoie
// une requête HTTP à une URI spécifique. Une route est définie par une
// méthode HTTP (GET, POST, PUT, DELETE), une URI et une fonction de
// traitement. La fonction de traitement est exécutée lorsque la route est
// appelée. La fonction de traitement prend en argument les objets req et res
// et est utilisée pour envoyer une réponse au client.
// -------------------------------------------------------------------
// -------EDITION DE USERROUTER.JS (DEFINITION DE LA ROUTE)-----------
// -------------------------------------------------------------------
// Importation du module express.
// const userRouter = require('express').Router();
// Importation du modele userModel.
// const userModel = require('../models/userModel');
// Importation de authguard.
// const authguard = require('../../services/authguard');
// Importation de bcrypt.
// const bcrypt = require('bcrypt');
// Importation de mongoose.
// const mongoose = require('mongoose');
// Configuration de la route pour ajouter un utilisateur.
// userRouter.post('/add', async (req, res) => {
//     try {
//         let user = new userModel(req.body);
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         console.error(error.message);
//       res.status(400).send(error.message);
//     }
// });
// Exportation du module userRouter.
// module.exports = userRouter;
// -------------------------------------------------------------------
// -----------------FIN DE L'EDITION DE USERROUTER.JS-----------------
// -------------------------------------------------------------------
// Explications sur la route pour ajouter un utilisateur :
// Ici nous avons créé une route pour ajouter un utilisateur dans la base de données.
// Cette route est définie par la méthode HTTP POST et l'URI /add.
// La fonction de traitement de la route est une fonction asynchrone qui prend en
// argument les objets req et res. Cette fonction de traitement est utilisée pour
// ajouter un utilisateur dans la base de données. La fonction de traitement commence
// par créer un nouvel utilisateur en utilisant le modèle userModel et les données
// envoyées dans le corps de la requête HTTP. La fonction de traitement utilise ensuite
// la méthode save() du modèle userModel pour enregistrer l'utilisateur dans la base de
// données. Si l'enregistrement est réussi, la fonction de traitement utilise la méthode
// status() de l'objet res pour définir le code d'état de la réponse HTTP à 201 (Created).
// La fonction de traitement utilise ensuite la méthode send() de l'objet res pour envoyer
// l'utilisateur ajouté au client. Si l'enregistrement échoue, la fonction de traitement
// utilise la méthode status() de l'objet res pour définir le code d'état de la réponse HTTP
// à 400 (Bad Request). La fonction de traitement utilise ensuite la méthode send() de l'objet
// res pour envoyer le message d'erreur au client.
// -------------------------------------------------------------------
// Une fois le fichier userRouter.js édité, nous allons l'importer dans le fichier
// server.js pour l'utiliser dans notre application Express. Pour cela nous allons
// ajouter la ligne suivante dans le fichier server.js :
// const userRouter = require('./src/routers/userRouter');
// ainsi que la ligne suivante :
// app.use(userRouter);
// Attention l'ordre des lignes est important, la ligne app.use(userRouter) doit être
// placée après la ligne app.use(express.urlencoded({ extended: true })); dans le fichier
// server.js.
// -------------------------------------------------------------------
// Maintenant que nous avons configuré notre route pour ajouter un utilisateur dans la
// base de données, nous allons créer une route pour l'autentification d'un utilisateur.
// Pour cela nous allons éditer le fichier userRouter.js pour ajouter une route pour
// l'autentification d'un utilisateur.
// -------------------------------------------------------------------
// ------------------------------ETAPE 7------------------------------
// --------------CREATION DE LA ROUTE DANS userRouter.js--------------
// --------------Pour l'autentification d'un utilisateur--------------
// -------------------------------------------------------------------
// ---------EDITION DE USERROUTER.JS (DEFINITION DE LA ROUTE)---------
// -------------------------------------------------------------------
// userRouter.post('/login', async (req, res) => {
//     try {
//         let user = await userModel.findOne({ email: req.body.email });
//         if (user) {
//            if (bcrypt.compareSync(req.body.password, user.password)) {
//                req.session.user = user;
//                res.redirect('/dashboard');
//            } else {
//                throw { password: 'Mot de passe incorrect' };
//            }
//         } else {
//             throw { email: 'Email incorrect' };
//         }
//     } catch (error) {
//         console.error(error);
//        res.status(400).render('../views/login/login.twig',
//            {
//                title: "Page de connexion",
//                errorAuth: error
//            });
//     }
// });
// -------------------------------------------------------------------
// -----------------FIN DE L'EDITION DE USERROUTER.JS-----------------
// -------------------------------------------------------------------
// Explications sur la route pour l'autentification d'un utilisateur :
// Ici nous avons créé une route pour l'autentification d'un utilisateur.
// Cette route est définie par la méthode HTTP POST et l'URI /login.
// La fonction de traitement de la route est une fonction asynchrone qui prend en
// argument les objets req et res. Cette fonction de traitement est utilisée pour
// autentifier un utilisateur. La fonction de traitement commence par rechercher
// l'utilisateur dans la base de données en utilisant la méthode findOne() du modèle
// userModel et l'email envoyé dans le corps de la requête HTTP. Si l'utilisateur est
// trouvé, la fonction de traitement utilise la méthode compareSync() de bcrypt pour
// comparer le mot de passe envoyé dans le corps de la requête HTTP avec le mot de passe
// stocké dans la base de données. Si la comparaison est réussie, la fonction de traitement
// utilise la méthode session() de l'objet req pour stocker l'utilisateur dans la session.
// La fonction de traitement utilise ensuite la méthode redirect() de l'objet res pour
// rediriger l'utilisateur vers la page de tableau de bord. Si l'utilisateur n'est pas
// trouvé dans la base de données, la fonction de traitement lance une erreur avec le
// message "Email incorrect". La fonction de traitement utilise ensuite la méthode status()
// de l'objet res pour définir le code d'état de la réponse HTTP à 400 (Bad Request). La
// fonction de traitement utilise ensuite la méthode render() de l'objet res pour afficher
// la page de connexion avec le message d'erreur "Email incorrect".
// -------------------------------------------------------------------
// Avant de poursuivre on teste la route à l'aide de Postmman. Dans le body de la requête
// on renseigne l'email et le mot de passe de l'utilisateur à autentifier en clair.
// 
// -------------------------------------------------------------------
// ------------------------------ETAPE 8------------------------------
// ----CREATION DES VUES INDEX.TWIG / LOGIN.TWIG / DASHBOARD.TWIG-----
// -------------------------------------------------------------------
// Maintenant que le serveur est configuré, que les routes pour s'inscrire et se connecter
// sont configurées, nous allons créer une vue index.twig dans le dossier views/home pour 
// afficher la page d'accueil de l'application qui conportera un formulaire pour s'inscrire
// et un bouton pour se connecter. Si le formulaire soumis est valide, l'utilisateur sera
// ajouté dans la base de données et redirigé vers la page dashboard. Le bouton de connexion
// redirigera l'utilisateur vers la page de connexion login.twig. dans le dossier views/login.
// Si l'utilisateur est autentifié, il sera redirigé vers la page dashboard.twig dans le dossier
// views/dashboard.
// -------------------------------------------------------------------
// Avant d'éditer les fichiers de vues, nous allons créer un fichier viewsRouter.js dans le
// répertoire routers pour gérer les routes des vues.
// Explication de ce qu'est une vue : Une vue est un fichier qui contient le code HTML, CSS et
// JavaScript qui est envoyé au client pour être affiché dans le navigateur. Une vue est utilisée
// pour afficher les pages Web d'une application Express. Une vue est généralement un fichier
// avec l'extension .twig qui est stocké dans le dossier views d'une application Express.
// -------------------------------------------------------------------


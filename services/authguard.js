// Fichier de configuration du middleware authguard.

// Importation du module userModel.
const userModel = require('../src/models/userModel');

// Création d'une fonction middleware authguard.
const authguard = async (req, res, next) => {
    try {
        if (req.session.user) {
            let user = await userModel.findOne({ email: req.session.user.email});
            if (user) {
                return next();
            }
        }
        throw new Error("Vous n'êtes pas autorisé à accéder à cette page. Veuillez vous connecter.");
    } catch (error) {
        console.error(error.message);
        res.status(401).render('../views/login/login.twig',
        {
            title: "Page de connexion",
            errorAuth: error.message
        });
    }
};

// Exportation de la fonction middleware authguard.
module.exports = authguard;

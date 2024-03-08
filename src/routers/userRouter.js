// Importation du module express.
const userRouter = require('express').Router();
// Importation du module userModel.
const userModel = require('../models/userModel');
// Importation du module authguard.
const authguard = require('../../services/authguard');
// Importation du module bcrypt.
const bcrypt = require('bcrypt');
// Importation de mongoose.
const mongoose = require('mongoose');

// Configuration d'une route pour ajouter un utilisateur. (Inscription)
userRouter.post('/add', async (req, res) => {
    try {
        const user = new userModel(req.body);
        user.validateSync();
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Configuration d'une route pour authentifier un utilisateur. (Connexion)
userRouter.post('/login', async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = user;
                // console.log("bcrypt a reussi a comparé les mots de passe");
                res.redirect('/dashboard');
            } else {
                throw { password: 'Mot de passe incorrect' };
            }
        } else {
            throw { email: 'Email incorrect' };
        }
    } catch (error) {
        console.error(error);
        res.status(400).render('../views/login/login.twig',
            {
                title: "Page de connexion",
                errorAuth: error
            });
    }
});


// Exportation du module userRouter.
module.exports = userRouter;

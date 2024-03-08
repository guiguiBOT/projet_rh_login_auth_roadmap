// Importation du module mongoose.
const mongoose = require('mongoose');
// Importation du module validator.
const validator = require('validator');
// importation du module bcrypt.
const bcrypt = require('bcrypt');
// Création du schema userSchema.
const userSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'le nom de l\'entreprise est requis'],
    },
    email: {
        type: String,
        required: [true, 'l\'email est requis'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'l\'email est invalide'],
    },
    password: {
        type: String,
        required: [true, 'le mot de passe est requis'],
        minlength: [8, 'le mot de passe doit contenir au moins 8 caractères'],
    },
    registryNumber: {
        type: String,
        required: [true, 'le numéro de registre est requis'],
    },
    head: {
        type: String,
        required: [true, 'le nom du directeur est requis'],
    },
});
// Avant de sauvegarder un document dans la collection users, on hash le mot de passe.
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});
// Création du modèle userModel.
const userModel = mongoose.model('users', userSchema);
// Exportation du modèle userModel.
module.exports = userModel;

// Fichier de configuration de Multer

// Importation du module multer.
const multer = require('multer');
// Création d'un objet de configuration de multer.
const mimeType = [
    'image/png',
    'image/jpeg',
    'image/jpg',
];

// Création d'un objet de configuration de multer.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/img/uploads');
    },
    filename: function (req, file, cb) {
        let extarray = file.mimetype.split('/');
        let extension = extarray[extarray.length - 1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
    }
});

// Création d'un objet de configuration de multer.
const upload = multer({
    storage: storage,
    fileFilter: function (req, file,cb) {
        if (!mimeType.includes(file.mimetype)) {
            req.multerError = true;
            return cb(null, false);
        }
        cb(null, true);
    }
})

// Exportation de l'objet de configuration de multer.
module.exports = upload;
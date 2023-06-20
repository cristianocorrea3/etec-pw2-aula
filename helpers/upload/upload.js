const multer = require('multer');

/* CONFIGURAÇÃO DE STORAGE */
const storage = multer.diskStorage(
    {
        destination:(req, file, cb)=>{
            cb(null, './uploads');
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now().toString() + '_' + file.originalname);
        }
    }
);

/* CONFIGURAÇÃO DE FILTER */
const fileFilter = (req, file, cb)=>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

/* UPLOAD */
const upload = multer({
    //regra de storage
    storage:storage,
    //regra tamanho
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    //regra de filter
    fileFilter:fileFilter
});

module.exports = upload;
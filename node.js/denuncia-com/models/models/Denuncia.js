// models/Denuncia.js
const mongoose = require('mongoose');

const DenunciaSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Denuncia', DenunciaSchema);
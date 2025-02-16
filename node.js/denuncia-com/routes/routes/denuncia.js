const express = require('express');
const Denuncia = require('../models/Denuncia');
const auth = require('../middleware/auth');

const router = express.Router();

// Criar denúncia
router.post('/', auth, async (req, res) => {
    const { descricao, cep, cidade, rua, numero } = req.body;
    try {
        const newDenuncia = new Denuncia({
            descricao,
            cep,
            cidade,
            rua,
            numero,
            user: req.user.id
        });
        const denuncia = await newDenuncia.save(); // Corrigido
        res.json(denuncia);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

// Obter denúncias do usuário
router.get('/', auth, async (req, res) => {
    try {
        const denuncias = await Denuncia.find({ user: req.user.id });
        res.json(denuncias);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
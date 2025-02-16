const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registrar usuário
router.post('/register', async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Usuário já existe' });
        }
        user = new User({ nome, sobrenome, email, senha });
        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secreta', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

// Login de usuário
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }
        const isMatch = await bcrypt.compare(senha, user.senha);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secreta', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
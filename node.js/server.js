const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/denuncia-com', { useNewUrlParser: true, useUnifiedTopology: true });

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/denuncias', require('./routes/denuncia'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
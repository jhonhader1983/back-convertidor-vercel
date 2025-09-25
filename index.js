const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rutas de calculadora
const calculadoraRouter = require('./routes/calculadora.routes.js');
app.use('/v1/calculadora', calculadoraRouter);

// Rutas de convertidora
const convertidoraRouter = require('./routes/convertidora.routes.js');
app.use('/v1/convertidora', convertidoraRouter);

app.listen(3500, () => {
    console.log('Servidor escuchando en puerto 3500');
});

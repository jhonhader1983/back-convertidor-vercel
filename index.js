const express = require('express');
const app = express();

app.use(express.json());

// Rutas de calculadora
const calculadoraRouter = require('./routes/calculadora.routes.js');
app.use('/v1/calculadora', calculadoraRouter);

// Rutas de convertidora
const convertidoraRouter = require('./routes/convertidora.routes.js');
app.use('/v1/convertidora', convertidoraRouter);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

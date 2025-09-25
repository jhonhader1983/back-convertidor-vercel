const express = require("express");
const router = express.Router();

const { convertirTiempo } = require("../operaciones/convertidora/tiempo.js");
const { convertirPeso } = require("../operaciones/convertidora/peso.js");
const { convertirTemperatura } = require("../operaciones/convertidora/temperatura.js");
const { convertirMoneda } = require("../operaciones/convertidora/moneda.js");



router.post("/tiempo", (req, res) => {
  try {
    const { value, from, to } = req.body;
    const resultado = convertirTiempo(value, from, to);
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/peso", (req, res) => {
  try {
    const { value, from, to } = req.body;
    const resultado = convertirPeso(value, from, to);
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/temperatura", (req, res) => {
  try {
    const { value, from, to } = req.body;
    const resultado = convertirTemperatura(value, from, to);
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/moneda", (req, res) => {
  try {
    const { value, from, to } = req.body;
    const resultado = convertirMoneda(value, from, to);
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

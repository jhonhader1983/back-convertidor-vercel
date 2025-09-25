
exports.temperatura = (req, res) => {
  const { value, from, to } = req.body;
  let resultado;

  if (from === "c" && to === "f") resultado = (value * 9) / 5 + 32;
  else if (from === "c" && to === "k") resultado = value + 273.15;
  else if (from === "f" && to === "c") resultado = ((value - 32) * 5) / 9;
  else if (from === "f" && to === "k")
    resultado = ((value - 32) * 5) / 9 + 273.15;
  else if (from === "k" && to === "c") resultado = value - 273.15;
  else if (from === "k" && to === "f")
    resultado = ((value - 273.15) * 9) / 5 + 32;
  else resultado = value;

  res.json({ resultado });
};

exports.tiempo = (req, res) => {
  const { value, from, to } = req.body;
  const unidades = {
    horas: 1,
    dias: 24,
    meses: 720,
    anios: 8760,
  };

  if (!unidades[from] || !unidades[to]) {
    return res.status(400).json({ error: "Unidad no soportada" });
  }

  const valorEnHoras = value * unidades[from];
  const resultado = valorEnHoras / unidades[to];

  res.json({ resultado });
};

exports.peso = (req, res) => {
  const { value, from, to } = req.body;
  const unidades = {
    gramos: 1,
    kilos: 1000,
    libras: 453.6,
  };

  if (!unidades[from] || !unidades[to]) {
    return res.status(400).json({ error: "Unidad no soportada" });
  }

  const valorEnGramos = value * unidades[from];
  const resultado = valorEnGramos / unidades[to];

  res.json({ resultado });
};

exports.moneda = (req, res) => {
  const { value, from, to } = req.body;

  if (!value || !from || !to) {
    return res.status(400).json({ error: "Faltan parámetros" });
  }

  const rates = {
    USD: 1,
    EUR: 0.95,
    COP: 3886,
    MXN: 19,
  };

  if (!rates[from.toUpperCase()] || !rates[to.toUpperCase()]) {
    return res.status(400).json({ error: "Moneda no soportada" });
  }

  const valorEnUSD = value / rates[from.toUpperCase()];
  const resultado = valorEnUSD * rates[to.toUpperCase()];

  res.json({ resultado });
};

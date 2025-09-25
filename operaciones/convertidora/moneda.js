function convertirMoneda(value, from, to) {
  let num = parseFloat(value);

  const rates = {
    USD: 1,
    EUR: 0.95,
    COP: 3886,
    MXN: 19,
  };

  if (!rates[from.toUpperCase()] || !rates[to.toUpperCase()]) {
    throw new Error("Moneda no soportada");
  }

  const valorEnUSD = num / rates[from.toUpperCase()];
  return valorEnUSD * rates[to.toUpperCase()];
}

module.exports = { convertirMoneda };

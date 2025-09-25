function convertirPeso(value, from, to) {
  let num = parseFloat(value);

  const conversionGramos = {
    gramos: 1,
    kilos: 1000,
    libras: 453.6,
  };

  if (!conversionGramos[from] || !conversionGramos[to]) {
    throw new Error("Unidad de peso no soportada");
  }

  let enGramos = num * conversionGramos[from];
  return enGramos / conversionGramos[to];
}

module.exports = { convertirPeso };

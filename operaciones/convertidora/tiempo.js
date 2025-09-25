function convertirTiempo(value, from, to) {
  let num = parseFloat(value);

  const conversionHoras = {
    horas: 1,
    dias: 24,
    meses: 720,  // aprox 30 días
    años: 8760   // aprox 365 días
  };

  if (!conversionHoras[from] || !conversionHoras[to]) {
    throw new Error("Unidad de tiempo no soportada");
  }

  let enHoras = num * conversionHoras[from];
  return enHoras / conversionHoras[to];
}

module.exports = { convertirTiempo };

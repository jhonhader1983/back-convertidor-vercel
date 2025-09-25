function convertirTemperatura(value, from, to) {
  let num = parseFloat(value);

  if (from === "c" && to === "f") return (num * 9) / 5 + 32;
  if (from === "c" && to === "k") return num + 273.15;
  if (from === "f" && to === "c") return ((num - 32) * 5) / 9;
  if (from === "f" && to === "k") return ((num - 32) * 5) / 9 + 273.15;
  if (from === "k" && to === "c") return num - 273.15;
  if (from === "k" && to === "f") return ((num - 273.15) * 9) / 5 + 32;

  return num; // si es la misma unidad
}

module.exports = { convertirTemperatura };

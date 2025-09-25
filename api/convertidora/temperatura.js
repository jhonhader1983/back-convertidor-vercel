export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://front-conver-vercel.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "POST") {
    let { value, from, to } = req.body;
    value = parseFloat(value);

    if (isNaN(value)) {
      return res.status(400).json({ error: "Valor no válido" });
    }

    let celsius;

    switch (from) {
      case "c": celsius = value; break;
      case "f": celsius = (value - 32) * (5/9); break;
      case "k": celsius = value - 273.15; break;
      default: return res.status(400).json({ error: "Unidad de origen no soportada" });
    }

    let resultado;
    switch (to) {
      case "c": resultado = celsius; break;
      case "f": resultado = (celsius * 9/5) + 32; break;
      case "k": resultado = celsius + 273.15; break;
      default: return res.status(400).json({ error: "Unidad de destino no soportada" });
    }

    return res.status(200).json({ resultado });
  }

  res.status(405).json({ error: "Método no permitido" });
}

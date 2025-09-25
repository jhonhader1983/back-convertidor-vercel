export default function handler(req, res) {
  // Configuración CORS
  res.setHeader("Access-Control-Allow-Origin", "https://front-conver-vercel.vercel.app"); 
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Manejo de preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    let { value, from, to } = req.body;
    value = parseFloat(value);

    if (isNaN(value)) {
      return res.status(400).json({ error: "Valor no válido" });
    }

    const tasas = {
      USD: 1,
      EUR: 0.94,
      COP: 4200,
      MXN: 17.1,
    };

    if (!tasas[from] || !tasas[to]) {
      return res.status(400).json({ error: "Moneda no soportada" });
    }

    const valorEnUSD = value / tasas[from];
    const resultado = valorEnUSD * tasas[to];

    return res.status(200).json({ resultado });
  }

  res.status(405).json({ error: "Método no permitido" });
}

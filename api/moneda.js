export default function handler(req, res) {
  if (req.method === "POST") {
    const { value, from, to } = req.body;

    const tasas = {
      USD: 1,
      EUR: 0.94,
      COP: 4200,
      MXN: 17.1
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

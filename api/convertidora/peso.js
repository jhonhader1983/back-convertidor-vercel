export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://front-conver-vercel.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "POST") {
    const { value, from, to } = req.body;

    const conversion = {
      gramos: 1,
      kilos: 1000,
      libras: 453.592
    };

    if (!conversion[from] || !conversion[to]) {
      return res.status(400).json({ error: "Unidad no soportada" });
    }

    const valorEnGramos = value * conversion[from];
    const resultado = valorEnGramos / conversion[to];

    return res.status(200).json({ resultado });
  }

  res.status(405).json({ error: "Método no permitido" });
}

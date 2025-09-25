export default function handler(req, res) {
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

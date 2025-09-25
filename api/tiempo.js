export default function handler(req, res) {
  if (req.method === "POST") {
    const { value, from, to } = req.body;

    const conversion = {
      horas: 1,
      dias: 24,
      meses: 720,   // aprox 30 días
      años: 8760    // 365 días
    };

    if (!conversion[from] || !conversion[to]) {
      return res.status(400).json({ error: "Unidad no soportada" });
    }

    const valorEnHoras = value * conversion[from];
    const resultado = valorEnHoras / conversion[to];

    return res.status(200).json({ resultado });
  }

  res.status(405).json({ error: "Método no permitido" });
}

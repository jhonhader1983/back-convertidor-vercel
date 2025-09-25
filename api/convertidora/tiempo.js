export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://front-conver-vercel.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

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

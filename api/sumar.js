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
    const { a, b } = req.body;

    const number1 = parseInt(a);
    const number2 = parseInt(b);

    return res.status(200).json({ resultado: number1 + number2 });
  }

  res.status(405).json({ error: "Método no permitido" });
}

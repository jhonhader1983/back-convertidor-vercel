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
    let { a, b } = req.body;

    const number1 = parseFloat(a);
    const number2 = parseFloat(b);

    if (isNaN(number1) || isNaN(number2)) {
      return res.status(400).json({ error: "Valores no válidos" });
    }

    return res.status(200).json({ resultado: number1 * number2 });
  }

  res.status(405).json({ error: "Método no permitido" });
}

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://front-conver-vercel.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "POST") {
    const { number1, number2 } = req.body;
    const resultado = parseFloat(number1) + parseFloat(number2);
    return res.status(200).json({ resultado });
  }

  res.status(405).json({ error: "Método no permitido" });
}

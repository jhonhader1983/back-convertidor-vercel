export default function handler(req, res) {
  if (req.method === "POST") {
    const { a, b } = req.body;

    const number1 = parseInt(a);
    const number2 = parseInt(b);

    return res.status(200).json({ resultado: number1 - number2 });
  }

  res.status(405).json({ error: "Método no permitido" });
}

import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY;

export function generarToken(payload) {
  const options = { expiresIn: "10h" }; // Token expira en 1 hora
  return jwt.sign(payload, secretKey, options);
}

export function verificarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Espera formato "Bearer <token>"

  if (!token) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      return res.status(403).json({ mensaje: "Token inválido" });
    }
    req.user = payload.sub;
    next();
  });
}

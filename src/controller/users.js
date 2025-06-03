import { pool } from "../databases.js";
const secret = process.env.SECRET_KEY;

//crear usuarios desde el sigup
export const createUsers = async (req, res) => {
  try {
    const { dni, nombre, apellido, email, contrasena, is_profe } = req.body; //esto viene desde el front
    const sql =
      "INSERT INTO usuarios (dni, nombre, apellido, mail, contrasena, is_profe) VALUES (?,?,?,?,?,?)";
    const [row] = await pool.query(sql, [
      dni,
      nombre,
      apellido,
      email,
      contrasena,
      is_profe,
    ]);

    if (row.affectedRows === 1) return res.send("exitoso");
    else return res.send("no exitoso");
  } catch (error) {
    console.log("error al crear usuario", error.message);
  }
};

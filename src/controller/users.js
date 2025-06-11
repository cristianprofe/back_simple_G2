import { pool } from "../databases.js";
import { generarToken } from "../security/auth.js";
import { hashPassword, verifyPassword } from "../security/hash.js";

//crear usuarios desde el sigup
export const createUsers = async (req, res) => {
  try {
    const { dni, nombre, apellido, email, contrasena, is_profe } = req.body; //esto viene desde el front
    //verifica lo que viene del front

    //hashear password desde el front
    const passwordHashed = await hashPassword(contrasena);
    const sql =
      "INSERT INTO usuarios (dni, nombre, apellido, mail, contrasena, is_profe) VALUES (?,?,?,?,?,?)";
    const [row] = await pool.query(sql, [
      dni,
      nombre,
      apellido,
      email,
      passwordHashed,
      is_profe,
    ]);

    if (row.affectedRows === 1)
      return res
        .status(200)
        .json({ success: true, message: "se creo el usuario" });
    else
      return res
        .status(400)
        .json({ success: false, message: "no se creo el usuario" });
  } catch (error) {
    console.log("error al crear usuario", error.message);
    return res.status(400).json({ error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { mail, contrasena } = req.body;
    const query = "SELECT contrasena, dni FROM usuarios WHERE mail=?";
    const [row] = await pool.query(query, [mail]);

    console.log(row);
    //comprobanos que el email exista
    if (row.length === 0)
      return res.status(400).json({ success: false, message: "mail no exite" });

    //verificar las contraseñas
    const isContrasena = await verifyPassword(contrasena, row[0].contrasena);

    if (!isContrasena)
      return res.status(400).json({ success: false, message: "contra mal" });

    //falta crear token
    const token = generarToken({ sub: row[0].dni });
    return res.status(200).json({ success: true, token: token });
  } catch (error) {
    console.log("error en login", error.message);
    return res.status(400).json({ error: error });
  }
};

export async function getMe(req, res) {
  const id = req.user;
  //ir a la base de dartos y obtener los datos de la persona
}

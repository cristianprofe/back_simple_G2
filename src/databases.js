//este archivo nos permitira conectarnos con la base de datos

import { config } from "./config.js";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  waitForConnections: true,
  queueLimit: 0,
  connectionLimit: 10,
});

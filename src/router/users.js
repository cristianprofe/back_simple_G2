//archivo para manejar las rutas de usuarios

import { Router } from "express";
import { createUsers } from "../controller/users.js";

//objeto para manejo de url
const routerUsers = Router();

/**
 * @swagger
 * /:
 *  post:
 *      sumary: crea usuarios
 */
routerUsers.post("/", createUsers);

export default routerUsers;

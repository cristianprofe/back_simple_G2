//archivo para manejar las rutas de usuarios

import { Router } from "express";
import { createUsers, getMe, login } from "../controller/users.js";
import { verificarToken } from "../security/auth.js";

//objeto para manejo de url
const routerUsers = Router();

/**
 * @swagger
 * /:
 *  post:
 *      sumary: crea usuarios
 */
routerUsers.post("/", createUsers);

/**
 * @swagger
 * /:
 *  get:
 *      sumary: Login de usuarios
 */
routerUsers.get("/login", login);

//rutas protegidas
/**
 * @swagger
 * /:
 *  get:
 *      sumary: getMe
 */
routerUsers.get("/", verificarToken, getMe);

export default routerUsers;

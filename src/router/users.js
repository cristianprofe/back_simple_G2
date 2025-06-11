//archivo para manejar las rutas de usuarios

import { Router } from "express";
import { createUsers, login } from "../controller/users.js";

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

export default routerUsers;

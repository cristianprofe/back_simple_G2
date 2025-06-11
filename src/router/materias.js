import { Router } from "express";
import { verificarToken } from "../security/auth.js";

const routerMaterias = Router();

export default routerMaterias;

//crear dos rutas
//crar materias que tiene que ser profesor
//listar materias que puede ser alumno o profesor

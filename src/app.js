//configuración de express
import express from "express";
import cors from "cors"; //vamos a hacer app, no lo necesito
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";
const spec = swaggerJSDoc(options);
import user from "./router/users.js";
import materias from "./router/materias.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use("/users", user); //dominio.com/users
app.use("/materias", materias);

//documentacion
app.use("/docs", swaggerUI.serve, swaggerUI.setup(spec));

export default app;

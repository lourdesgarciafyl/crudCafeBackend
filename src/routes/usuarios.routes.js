import { Router } from "express";
import { controladorPruebaUsuario, crearUsuario, obtenerListaUsuarios, obtenerUsuario } from "../controllers/usuarios.controllers";

const routerUsuarios = Router()

routerUsuarios.route("/pruebausuario").get(controladorPruebaUsuario)
routerUsuarios.route("/usuarios").post(crearUsuario).get(obtenerListaUsuarios)
routerUsuarios.route("/usuarios/:id").get(obtenerUsuario)

export default routerUsuarios;
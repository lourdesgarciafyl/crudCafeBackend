import { Router } from "express";
import { controladorPruebaUsuario, crearUsuario, obtenerListaUsuarios } from "../controllers/usuarios.controllers";

const routerUsuarios = Router()

routerUsuarios.route("/pruebausuario").get(controladorPruebaUsuario)
routerUsuarios.route("/usuarios").post(crearUsuario).get(obtenerListaUsuarios)

export default routerUsuarios;
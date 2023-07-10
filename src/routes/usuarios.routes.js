import { Router } from "express";
import { check } from "express-validator";
import { controladorPruebaUsuario, crearUsuario, login, obtenerListaUsuarios, obtenerUsuario } from "../controllers/usuarios.controllers";

const routerUsuarios = Router()

routerUsuarios.route("/pruebausuario").get(controladorPruebaUsuario)

routerUsuarios.route("/usuarios").get(obtenerListaUsuarios).post(login)

routerUsuarios.route("/nuevo").post(
    [
        check("nombreUsuario").notEmpty().withMessage("El nombre es obligatorio"),
        check("email", "El email es obligatorio").isEmail(),
        check("password", "El password debe de ser de 8 a 16 caracteres")
          .isLength({
            min: 8,
            max: 16,
          })
         // usada en clases: .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
         .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
         .withMessage(
            "El password debe contener 8 a 16 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales"
          ),
      ],
    crearUsuario)

routerUsuarios.route("/usuarios/:id").get(obtenerUsuario)

export default routerUsuarios;
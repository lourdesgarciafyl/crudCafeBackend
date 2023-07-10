import Usuario from "../models/usuario";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt"

export const controladorPruebaUsuario = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearUsuario = async (req, res) =>{
    try{
    //trabajar con los resultados de la validacion
    const errors = validationResult(req);
    //errors.isEmpty(); true: si esta vacio, es false si tiene errores;
    //quiero saber si hay errores
    if(!errors.isEmpty()){
        return res.status(400).json({
            errores: errors.array()
        }) 
    }    
    const { email, password } = req.body;
    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    console.log(usuario);
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    // encriptar la contraseña antes de guardar el dato
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);
    // luego guardar en la base de datos
    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      uid: usuario._id,
    });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error. No se pudo crear el usuario."
        })
    }
    }


export const obtenerListaUsuarios = async (req, res) =>{
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la lista de usuarios"
        })
    }
}

export const obtenerUsuario = async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener el usuario"
        })
    }
}

export const login = async (req, res) => {
    try{
         // extraer email o password del reqbody
         const {email, password} = req.body;
         // verificar si el mail existe en la base de datos
         let usuario = await Usuario.findOne({email});
         if(!usuario){
            // si no encuentro al uauario
            return res.status(404).json({
                mensaje: "Error. Mail o contraseña incorrecta."
            })
         }
         // verificar si la contraseña coincide con el mail
         const passwordValido = bcrypt.compareSync(password, usuario.password); // devuelve un valor booleano. TRUE si los password coinciden.
         // preguntar si la variable es igual a false
         if(!passwordValido){
            return res.status(404).json({
                mensaje: "Error. Mail o contraseña incorrecta."
            })
         }

         // responder al frontend con el usuario valido
         res.status(200).json({
            mensaje: "El usuario es correcto",
            nombreUsuario: usuario.nombreUsuario
         })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Usuario o contraseña incorrecta"
        })
    }
}
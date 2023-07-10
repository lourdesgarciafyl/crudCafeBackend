import Usuario from "../models/usuario";
import { validationResult } from "express-validator";

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
    const { email } = req.body;
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
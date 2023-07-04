import Usuario from "../models/usuario";

export const controladorPruebaUsuario = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearUsuario = async (req, res) =>{
    try{
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save()
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error. No se pudo dar de alta el usuario"
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
import Producto from "../models/producto"

export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearProducto = async (req, res) => {
    try{
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se puso crear el producto"
        })
    }
}
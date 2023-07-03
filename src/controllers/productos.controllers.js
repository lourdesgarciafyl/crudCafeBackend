import Producto from "../models/producto"

export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearProducto = async (req, res) => {
    try{
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save(); // save es una querie o metodo de mongoose para guardar en la coleccion
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo crear el producto"
        })
    }
}

export const obtenerListaProductos = async (req, res) =>{
    try{
        // buscar en la base de datos la coleccion de productos
        const productos = await Producto.find(); // find de mongoose es una querie que devuelve una lista de los documentos (osea, de todos los productos)
        res.status(200).json(productos); // mando al front la lista de productos
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la lista de productos"
        })
    }
}
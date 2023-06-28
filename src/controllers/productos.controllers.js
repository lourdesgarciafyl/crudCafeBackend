export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearProducto = (req, res) => {
    try{
        
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se puso crear el producto"
        })
    }
}
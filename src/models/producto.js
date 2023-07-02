import mongoose, { Schema } from "mongoose";

// creo la plantilla de un producto
const productoSchema = new Schema({
   nombreProducto:{
    type: String,
    required: true,
    unique: true, // productos unicos, para evitar datos duplicados
    minLength: 3,
    maxLength: 60
   },
   precio:{
    type: Number,
    required: true,
    min: 10,
    max: 10000
   },
   imagen:{
    type: String,
    required: true
   },
   categoria:{
    type: String,
    required: true
   },
   descripcion:{
    type: String,
    required: true
   } 
})

const Producto = mongoose.model(`producto`, productoSchema) //no poner una "s" a "producto" de adentro de parentesis, xq mongodb la agrega al final cuando vamos agregando mas productos

export default Producto;
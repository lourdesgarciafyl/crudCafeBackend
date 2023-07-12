// me conecto a la base de datos
import mongoose, { mongo } from "mongoose";
import "dotenv/config"

const uri = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/crudcafe" // la ultima parte de crudcafe, eso lo elijo yo
mongoose.connect(uri)

const datosConexion = mongoose.connection;

datosConexion.once("open", ()=>{
    console.log("Conexión exitosa a la base de datos")
})
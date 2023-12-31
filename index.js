import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import "./src/database/dbConnection"   // importamos la conexion con la base de datos
import productosRouter from "./src/routes/productos.routes";
import routerUsuarios from "./src/routes/usuarios.routes";

dotenv.config() // si o si antes de mencionar una variable de entorno

// configurar un puerto
// crear una instancia de express
const app = express();

app.set("PORT", process.env.PORT || 4006)

app.listen(app.get("PORT"), () =>{
    console.log("Estoy en el puerto "+ app.get("PORT"))
})

//middlewares: funciones que se ejecutan antes de las rutas
app.use(express.json()); //permite interpretar el formato json en un request
app.use(express.urlencoded({extended: true})); // permite interpretar strings y array del request
app.use(cors()); //permite conexiones remotas
app.use(morgan("dev")); //da info extra en la terminar
// ultimo middlewere para CARGAR UN ARCHIVO ESTATICO
console.log(path.join(__dirname, `/public`));
app.use(express.static(path.join(__dirname, `/public`)))

// rutas: a donde se hara una solicitud
// http://localhost:4000/apicafe/prueba
app.use(`/apicafe`, productosRouter)
app.use(`/apicafe/auth`, routerUsuarios)

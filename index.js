import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";

dotenv.config() // si o si antes de mencionar una variable de entorno

// configurar un puerto
// crear una instancia de express
const app = express();

app.set("PORT", process.env.PORT || 4000)

app.listen(app.get("PORT"), () =>{
    console.log("Estoy en el puerto "+ app.get("PORT"))
})

//middelwares: funciones que se ejecutan antes de las rutas
app.use(express.json()); //permite interpretar el formato json en un request
app.use(express.urlencoded({extended: true})); // permite interpretar strings y array del request
app.use(cors()); //permite conexiones remotas
app.use(morgan("dev")); //da info extra en la terminar

// rutas

import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})

const Usuario = mongoose.model(`usuario`, usuarioSchema);

export default Usuario;
import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        maxlength: 30
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    password:{
        type: String,
        required: true
    }
})

const Usuario = mongoose.model(`usuario`, usuarioSchema);

export default Usuario;
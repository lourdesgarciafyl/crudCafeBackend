import { Router } from "express";
import { borrarProducto, controladorPrueba, crearProducto, editarProducto, obtenerListaProductos, obtenerProducto } from "../controllers/productos.controllers";
import { check } from "express-validator";
import validarProducto from "../helpers/validarProducto";


const router = Router();
// solo UN get por ruta
router.route("/prueba").get(controladorPrueba)

router.route("/productos").post(validarProducto, crearProducto).get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(validarProducto, editarProducto)  // /:id podría ser cualquier otra palabra, no necesariamente id

export default router;
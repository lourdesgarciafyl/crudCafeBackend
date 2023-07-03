import { Router } from "express";
import { controladorPrueba, crearProducto, obtenerListaProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();
// solo UN get por ruta
router.route("/prueba").get(controladorPrueba)
router.route("/productos").post(crearProducto).get(obtenerListaProductos)
router.route("/productos/:id").get(obtenerProducto)  // /:id podría ser cualquier otra palabra, no necesariamente id

export default router;
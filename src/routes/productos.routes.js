import { Router } from "express";
import { borrarProducto, controladorPrueba, crearProducto, obtenerListaProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();
// solo UN get por ruta
router.route("/prueba").get(controladorPrueba)
router.route("/productos").post(crearProducto).get(obtenerListaProductos)
router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto)  // /:id podría ser cualquier otra palabra, no necesariamente id

export default router;
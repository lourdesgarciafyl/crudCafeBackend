import { Router } from "express";
import { borrarProducto, controladorPrueba, crearProducto, editarProducto, obtenerListaProductos, obtenerProducto } from "../controllers/productos.controllers";
import { check } from "express-validator";


const router = Router();
// solo UN get por ruta
router.route("/prueba").get(controladorPrueba)

router.route("/productos").post([
    check(`nombreProducto`)
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isString()
    .isLength({min: 3, max:60})
    .withMessage("El nombre del producto debe contener entre 3 y 60 caracteres"),
    check(`precio`)
    .notEmpty()
    .withMessage("El preico del producto es obligatorio")
    .isNumeric()
    .withMessage("Debe ingresar un valor numerico")
    .custom(()=>{})
],
crearProducto
)
.get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(editarProducto)  // /:id podría ser cualquier otra palabra, no necesariamente id

export default router;
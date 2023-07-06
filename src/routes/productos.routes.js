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
    .custom((value) =>{
        if(value >= 10 && value <= 10000){
            return true;
        }else{
            throw new Error("El precio debe estar entre 10 y 10000")
        }
    }),
    check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage("Debe ingresar un link terminado en jpg, gif o png"),
    check("descripcion")
    .isString()
    .notEmpty(),
    check("categoria")
    .notEmpty()
    .withMessage("La categoría es una dato obligatorio")
    .isIn(["bebida caliente", "bebida fria", "dulce", "salado"])
    .withMessage("La categoria debe ser una opción válida")

],
crearProducto
)
.get(obtenerListaProductos);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(editarProducto)  // /:id podría ser cualquier otra palabra, no necesariamente id

export default router;
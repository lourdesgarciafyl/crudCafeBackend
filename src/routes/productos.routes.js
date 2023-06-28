import { Router } from "express";
import { controladorPrueba, crearProducto } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba)
router.route("/productos").post(crearProducto)
export default router;
import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    // trabajar con resultados de la validacion con express validator
    const errors = validationResult(req)
// errors tiene un metodo llamado isEmpty, true: todo esta bien, esta vacio, false: hay errores que se guardaron en el array errors
    if(!errors.isEmpty()){
    return res.status(400).json({
    errores: errors.array()
    });
    };
    next()
}

export default resultadoValidacion
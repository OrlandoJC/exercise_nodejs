function validate(req, resp, next){
    var auth = req.headers['authorization']

    if(auth === "true") {
        next()
    } else {
        resp.status(400).json({ok : false, msg : "error de autorizacion: No existe la propiedad headers o no tiene el valor true"})
    }
}

module.exports = {
    validate
}
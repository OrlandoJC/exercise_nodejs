let express       = require('express'),
    app           = express(),
    { validate }  = require('./middleware/index'),
    bodyParser    = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(validate)

app.get('/user', (req, resp) => {
    let info = req.body;
    resp.status(200).send({res : "ok" , informacion : info})
})

app.listen('3000',  () => { console.log("Servidor ejecutando en el puerto 3000") })
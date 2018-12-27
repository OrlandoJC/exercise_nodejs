let express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.get('/user', (req, resp) => { resp.send("Endpoint get User") })

app.post('/user', (req, resp)=>{
    resp.status(200).json({
       info : req.body
    })
})

app.listen('3000', () => { console.log("Servidor ejecutando en el puerto 3000") })
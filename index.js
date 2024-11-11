const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")

//Renderizador
app.engine("html", mustacheExpress)
app.set("view engine", "html")
app.set("view", __dirname + "/src/view")

//Servidor
const PORT = 8080
app.listen(PORT, function(){
    console.log(`Aplicação rodando na porta ${PORT}`)
})
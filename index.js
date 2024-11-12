const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")

//Renderizador
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/src/view")

//Arquivos estáticos (CSS)
app.use(express.static(__dirname + "/public"))

//Rotas
app.use(require("./src/route/main.js"))

//Servidor
const PORT = 8080
app.listen(PORT, function(){
    console.log(`Aplicação rodando na porta ${PORT}...`)
})

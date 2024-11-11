const express = require("express")
const app = express()

const PORT = 8080
app.listen(PORT, function(){
    console.log(`Aplicação rodando na porta ${PORT}`)
})
const express = require("express")
const { viewIndex } = require("../controller/main")
const router = express.Router()

//Rotas
router.get("/", viewIndex)

module.exports = router
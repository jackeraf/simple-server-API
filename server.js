"use strict"

const express = require("express")
var bodyParser = require("body-parser")

var app = express()


app.use(bodyParser.json())


app.post("/sendData", (req, res)=>{
	console.log("This is what the client sent: ", req.body)
})

app.get("/getData", (req, res)=>{
	var json = {"text": "Hola cliente este es tu json"}
	res.send(json)
	console.log("This is what we send to the client: ", json)
})
app.listen(3000, ()=>{
	console.log("Server running")
})
'use strict'
// Code for server side
const express = require('express')
const app = express()

const morgan = require('morgan')
const layouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const server = require('http').Server(app)

app.use(morgan('dev')) // logging requests to server

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')
app.set('layout', 'main') // not a file path; does a lookpu


app.use(layouts)
app.use(express.static(__dirname + '/public')) // serving frontend file; index.html is starting point
app.use(express.json()) // middleware to read json
app.use(bodyParser.urlencoded({
    extended: false
}))



server.listen(8080, (error) => {
    console.log((error) ? error : `Perceptron\nServer up on ${8080}`)
})
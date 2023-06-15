const express = require('express')
const axios = require('axios')
const ejs = require('ejs')


const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running")
})
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

mongoose.connection.on("connected", () => {
    console.log(`Connected to database`)
})

mongoose.connection.on("error", (err) => {
    console.log(`Database error: ${err}`)
})

const app = express()

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.use(express.static(path.join(__dirname,`public`)))
app.use('/uploads',express.static(path.join(__dirname,`uploads`)))

app.use(bodyParser.json())

app.use(passport.initialize({}))
app.use(passport.session({}))
require("./config/passport")(passport)

app.use('/api', require('./routes'))

app.get('/',(req,res) => {
    res.send(`Invalid endpoint`)
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

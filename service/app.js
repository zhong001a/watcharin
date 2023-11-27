const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors)
app.use(morgan('dev'))


app.get("/", ( req, res )=>{
    res.json({
        data:"message from service"
    })
})

const port = process.env.PORT || 4000

app.listen(port,()=> console.log(`start http://localhost:${port}`))
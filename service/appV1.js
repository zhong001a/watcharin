const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const dotenv = require('dotenv')
const mysql = require('mysql2');

const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

let conn =null
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'db', // หรือใส่เป็น localhost ก็ได้
    user: 'root',
    password: 'root',
    database: 'remo_db'
  })
}

app.get('/first', (req, res) => {
  res.json({
    msg:'first call...'
  })
})

app.get('/test', async (req, res) => {
  conn.query(
    'SELECT * FROM test',
    function(err, results, fields) {
      res.json({
        data:results
      })
    }
  )
})

const port = 8000;
app.listen(port, async () => {
  await initMySQL()
  console.log(`Server running at http://localhost:${port}/`)
})
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const productRoute = require('./route/product-route/productRoute')
const offerRoute = require('./route/offer-route/offerRoute')

app.use('/api/product', productRoute);
app.use('/api/offer', offerRoute);

app.get('/first', (req, res) => {
  res.json({
    msg: 'first call...'
  })
})



const port = 8000;
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}/`)
})
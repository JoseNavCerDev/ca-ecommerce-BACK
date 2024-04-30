const express = require('express');
const { mongo, default: mongoose } = require('mongoose');
const db_conection = require('./config/connection');
const app = express()
const port = 3000

const productSchema = require('./models/product');

app.use(express.json());

db_conection();

app.get('/', (req, res) => {
  res.send('All OK from backend !!');
})

app.post('/newClothes', async(req,res) => {
  const product = await productSchema(req.body);
  product.save().then(data => res.json(data)).catch(e => res.json(e));
})

app.get('/clothes', (req,res) => {
  productSchema
  .find()
  .then((data) => res.json(data))
  .catch(e => res.json(e))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://www.youtube.com/watch?v=S4IgPTwwPBw
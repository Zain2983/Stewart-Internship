const express = require('express');
const app = express();
const logger = require('./my-files/logger')
const authorize = require('./my-files/authorize')
// req = middleware => res

app.use([logger,authorize]);

app.get('/',logger,(req,res)=>{
  res.send('Home');
})

app.get('/about',logger,(req,res)=>{
  res.send('About');
})

app.get('/api/products',logger,(req,res)=>{
  res.send('Products');
})

app.get('/api/items',logger,(req,res)=>{
  res.send('Items');
})

app.listen(5000,()=>{
  console.log('Server is listening on port 5000...')
})

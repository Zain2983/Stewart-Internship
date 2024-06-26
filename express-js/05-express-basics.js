const express = require('express');
const app = express();

// app.get
// app.post 
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/',(req,res)=>{
  console.log('User hit the Home Page');
  res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
  console.log('User hit the About Page');
  res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,()=>{
  console.log("Server is listening on port 5000");
})
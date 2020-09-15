const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.listen(port,(req,resp)=>{
   console.log('App server start listening to port ' + PORT)
})
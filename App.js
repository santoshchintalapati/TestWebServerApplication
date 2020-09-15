const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.listen(port,( )=>{
   console.log('App server start listening to port ' + port)
})

app.get('',(req,resp)=>{
    resp.render('<h1>This is help page!!!</h1>');
})
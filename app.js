const express = require('express')
const compression =require('compression')
const app = express()

// app.use(compression())注册为中间件且一定得在静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
  console.log('server running at http://127.0.0.1');
  
})
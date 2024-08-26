const http = require("http")
const url = require("url")
const server  =http.createServer((req,res)=>{
   const info= url.parse(req.url,true)
   const query = info.query
   res.write(info.path)
 //  res.write(query.name)
   res.end()


}) 
server.listen(8080)
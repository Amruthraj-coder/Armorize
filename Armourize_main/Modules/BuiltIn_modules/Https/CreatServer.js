const http = require('node:http');

var server =http.createServer((req,res)=>{
res.writeHead(200,{"Content-type":"plain/Text"})
res.end("hello world")
// console.log(req);
})

server.listen(1234,()=>{
    console.log("server local host 3000 is running")
})
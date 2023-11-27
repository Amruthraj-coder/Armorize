const http=require('http');
const fs =require('fs');
const port =4000;

const server =http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'})
fs.readFile("./modules/index.html","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        res.write(data)
    }
})

})





server.listen(port,(err)=>{
    if(err){
        console.log("there waas some thing worng in",err)
    }
    else{
        console.log(`the server was running in the port:${port}`)
    }
})


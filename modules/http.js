var http =require('http')

var server=http.createServer(function(req,res){
    res.write("hello")
}).listen(1212,(err)=>{
    console.log("running");
})

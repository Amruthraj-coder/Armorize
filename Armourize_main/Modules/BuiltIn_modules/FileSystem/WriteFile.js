let fs =require('fs')

fs.writeFile('example.js','hi sharon this is new file',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Done");
    }
})
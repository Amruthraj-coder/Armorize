let fs= require('fs')


fs.readFile('./Modules/modules.js','utf8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
        // return data;
    }
})

// console.log(data);


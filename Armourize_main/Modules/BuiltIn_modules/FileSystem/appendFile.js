let fs=require('fs');

fs.appendFile('exapmle.txt','console.log("appended sharon")',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("done");
    }
})

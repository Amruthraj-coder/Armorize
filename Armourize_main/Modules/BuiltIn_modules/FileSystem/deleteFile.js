let fs=require('fs')

fs.unlink('exapmle.txt',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file Deleted");
    }
})
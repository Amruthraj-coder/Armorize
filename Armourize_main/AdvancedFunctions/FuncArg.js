let add=function(x,y){
    return x+y
}
let sub = function(x,y){
    return x-y;
}

function exe(add,sub){
    let x=5,y=2
let r1=add(x,y);
let r2=sub(x,y);
console.log(r1,r2);
return add;
}

let cat=exe();

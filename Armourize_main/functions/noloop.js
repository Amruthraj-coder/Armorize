function num(x=1){
if(x==10){
    console.log(10);
    return;
}
console.log(x)
num(x+1);
}
num();
function amstrong(x){

    let len=length(x);
    let y=0;
    for(let i=x;i!=0;i=Math.floor(i/10)){
        let n=i%10
        y+=Math.pow(n,len);

    }
    if(y==x){
        console.log(x,"is an Amstrong Number ");
    }
    else{
        console.log(x,"is not an Amstrong Number")
    }
    
}

function length(x){
    let len =x.toString().trim().length;
    
    return len;
}


amstrong(1);




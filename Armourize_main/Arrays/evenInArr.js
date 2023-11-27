function eveEles(arr){
    let brr=[];
    let j=0;
for(let i=0;i<arr.length;i++){
    
    if(arr[i]%2==0){
        brr[j]=arr[i];
        j++;
    }

}
return brr;
}

let result=eveEles([1,2,3,4,5,6]);
console.log(result);
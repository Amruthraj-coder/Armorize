function max_ele(arr){
    let maxele=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxele){
            maxele=arr[i];
        }
    }
    return maxele;
}
let result=max_ele([1,10,52,0,6]);
console.log(result);

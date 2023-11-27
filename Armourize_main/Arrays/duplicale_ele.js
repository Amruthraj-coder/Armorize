function DuplicateElements(arr){
let brr=[];
let curr=0;
let del;
for(let i=0;i<arr.length;i++){
     curr=arr[i];
    for(let j=0;j<arr.length;j++){
        if((arr[j]==curr) && (j!=i)&&!(brr.includes(curr))){
            brr.push(curr)
        }
    }
    
}
return brr;
}

let result =DuplicateElements([1,2,3,4,6,6,2,3,1,4,1]);

console.log(result);
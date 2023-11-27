function countzero(arr){
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        count++
    }

}
return count;
}

let numberofzeros=countzero([0,5,1,0,1,0,1,0,4,0]);
console.log(numberofzeros);
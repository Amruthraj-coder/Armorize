let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let r=3;
let c=3;
let eve=0;
let odd=0

for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        if(i%2==0){
            if(j%2==0){
                eve+=arr[i][j];
            }
            else{
                odd+=arr[i][j];
            }
        }
        else{
            if(j%2==0){
                odd+=arr[i][j];
            }
            else{
                eve+=arr[i][j];
            }
        }
    }
}

console.log(eve,odd);
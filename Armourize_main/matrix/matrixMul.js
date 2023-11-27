// let x=[[1,2],[4,5]];
// let y =[[1,2],[4,5]];
// let xy=[[],[]];
// let r=x.length;
// let c=x[0].length;

// // console.log(r,c)
// for(let i=0;i<r;i++){
//     let sum=0
    
//     for(let j=0;j<c;j++){
        
//         sum+=x[i][j]*y[j][i];
//     }
//     for( let k=0;k<c;k++){
//         xy[i][k]=sum;
//     }
// }
// console.log(xy);

let x=153;
let sum=0;
for(let i=x;i!=0;i=parseInt(i/10)){

    console.log(i%10);
}

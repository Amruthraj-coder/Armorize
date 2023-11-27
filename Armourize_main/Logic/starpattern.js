let n=5;
let string="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        string+="* ";

    }
    console.log(string);
    string="";
}

// let n=5;
// let string="";
// for(let i=0;i<n;i++){
//     for(let j=n-i-1;j>0;j--){
//         string+=" ";

//     }
//     for(let k=0;k<=i;k++){
//         string+=" *";
//     }
//     console.log(string);
//     string=""; 
// }
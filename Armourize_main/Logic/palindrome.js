function palin(str){
    let i=0;
    let j=str.length-1;
    while(j>i){
        if(str.charAt(i)!=str.charAt(j)){
            console.log("it is not a palindrome");
            return
        }
        i++;
        j--;
    }
    console.log("it is a palindrome");

}
palin("hannah");
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
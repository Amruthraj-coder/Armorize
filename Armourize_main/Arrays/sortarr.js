function SortArr(arr){
    // let smallnum=arr[i];
    for(let i=0;i<arr.length-1;i++){
        
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let curr=arr[i];
                arr[i]=arr[j];
                arr[j]=curr;
            }
        }
    }
    console.log(arr);
}

SortArr([1,4,2,1,3]);

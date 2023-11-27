let parentfunc=()=>{
        console.log("parent func")
                    return refunc=(x,y)=>{
                        return x+y
                    }
                    }

            
    let parentres=parentfunc();

    console.log(parentres);
    let result = parentres(5,8);
    console.log(result);
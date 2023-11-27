
var sub = function(x, y){
    var z = x  - y;
    return z;
}

var add = function(x, y){
    var z = x  + y;
    return z;
}

var mul=function(x, y){
    var z = x  * y;
    return z;
}


var div=function(x, y){
    var z = x  / y;
    return z;
}



var calc=function(fun, a,b){

    if(fun=="add"){
    var result = add(a,b);
    return result;
    }

    if(fun=="sub"){
        var result = sub(a,b);
        return result;
        }

        if(fun=="mul"){
            var result = mul(a,b);
            return result;
            }
            if(fun=="div"){
                var result = div(a,b);
                return result;
                }
}

module.exports=calc;

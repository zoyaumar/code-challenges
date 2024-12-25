var mySqrt = function(x) {
    let st = 0
    let end = x
    let i = Math.floor((st+end)/2)
    if(x==0) return 0
    if(x<=3) return 1
    while(i!=st&&i!=end){
        if(i*i==x)
            return i
        if(i*i>x)
            end = i       
        else 
            st = i
        i = Math.floor((st+end)/2)
    }
    return i
};

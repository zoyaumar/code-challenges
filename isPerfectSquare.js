var isPerfectSquare = function(num) {
    let st = 0
    let end = num
    if(num==1) return 1
    while(st <= end){
        let i = Math.floor((st+end)/2)
        if(i*i==num)
            return true
        if(i*i>num)
            end = i-1            
        else 
            st = i+1
    }
    return false
};

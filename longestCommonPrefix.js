var longestCommonPrefix = function(strs) {
    let s = strs[0]
    for(let str of strs){
        if(str.length < s.length)
            s = str
    }
    while(s.length > 0){
        if(strs.every((str)=>str.startsWith(s)))
            return s
        else
            s = s.slice(0, -1)
    }
    return s
};

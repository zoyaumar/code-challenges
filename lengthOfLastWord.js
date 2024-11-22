var lengthOfLastWord = function(s) {
    let l = s.trim().split(" ")
    return l[l.length-1].length
};

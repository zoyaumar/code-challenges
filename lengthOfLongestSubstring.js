/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0
    let substr = 1
    let a = 0
    let b = 0 
    let m = new Map()
    while(b < s.length){
        if(m.get(s[b]) == 1){
            m.delete(s[a])
            //while(s[a]!=s[b]){
            //    a++
            //    m.delete(s[a])
            //} 
            a++
        }
        else{
            substr = Math.max(substr, b-a+1)
            m.set(s[b], 1)
            b++
        }
    }
    return substr
};

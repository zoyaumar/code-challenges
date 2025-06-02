class Solution {
    /**
     * @param {string[]} strs - may include numbers, spaces, all ascii characters
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for(const str of strs)
            s+=""+(str.length?str.length:'')+"#"+str
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let num = ""
        for(let i = 0; i < str.length; i++){
            if(str[i] != '#'){
                num += str[i]
            }
            else{
                arr.push(str.slice(i+1, +num+1+i))
                i = i+ +num
                num = ""
            }
        }
        return arr
    }

}

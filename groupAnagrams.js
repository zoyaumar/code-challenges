/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        let obj = {}
        for(const str of strs){
            let s = str.split('').sort().join('')
            if(obj[s]){
                obj[s].push(str)
            }
            else{
                obj[s] = [str]
            }
        }
        return Object.values(obj)
};
// for: O(n) * [split: O(m) + sort: O(mlogm) + join: O(m)]
// n * (m + mlogm + m) = n * mlogm = nmlogm

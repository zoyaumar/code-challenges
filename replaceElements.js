/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length == 1)
        return [-1]
    for(let i = arr.length; i > 1; i--){
        if(arr[i-1]<arr[i])
            arr[i-1]=arr[i]
    }
    arr.shift()
    arr.push(-1)
    return arr
};

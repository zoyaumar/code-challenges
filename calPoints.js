/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    for(let op of operations){
        let last = arr.length-1
        switch(op){
            case '+':
                arr.push(arr[last]+arr[last-1])
                break;
            case 'D':
                arr.push(arr[last]*2)
                break;
            case 'C':
                arr.pop()
                break;
            default:
                arr.push(+op)
        }
    }
    return arr.reduce((acc, c) => {return acc+c}, 0)
}

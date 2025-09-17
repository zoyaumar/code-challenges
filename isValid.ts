const isValid = (arr:string[]): boolean => {
    let stack:string[] = []
    let pairs = new Map<string, string>();
    pairs.set(')', '(')
    pairs.set(']', '[')
    pairs.set('}', '{')

    for(let str of arr){
        console.log(Array.from(pairs.keys()))
        if(Array.from(pairs.values()).includes(str)){
            stack.push(str)
        }
        else{
            console.log(str)
            if(stack.pop() != pairs.get(str))
                return false
        }
    }
    return true
}

console.log(isValid(['[','{',']','}',']']))

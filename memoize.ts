function memoize(func: Function){
    let cache = new Map()
    return (...args: any[]) => {
        let temp = JSON.stringify(args)
        if(cache.has(temp))
            return cache.get(temp) 
        cache.set(temp, func(...args))
        return cache.get(temp)
    }
}

const slowAdd = (a: number, b: number) => a + b;
const fastAdd = memoize(slowAdd);
console.log(fastAdd(2, 3)); // computes once
console.log(fastAdd(2, 3)); // returns cached

function flattenArray(arr: (number[] | number)[]): number[] {
    let flat: number[] = []
    for (let i of arr) {
        if (typeof i == "object") {
            for (let j of i) {
                flat.push(j)
            }
        }
        else
            flat.push(i)
    }
    return flat
}

const arr = [[1, 3, 4, 2, 5], [2, 4, 3], [2], [1, 4, 5], 7]
console.log(flattenArray(arr))

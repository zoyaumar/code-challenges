class MovingAverage {
    private size: number;
    private nums:number[] = []
    private sum:number = 0

    constructor(size: number){
        this.size = size
    }

    next(val: number): number {
        // if(this.nums.length >= this.size)
        //     this.nums.shift()
        // this.nums.push(val)

        // this.sum = this.nums.reduce((a:number,b:number) => (b + a), 0)
        // let average = this.sum/this.nums.length
        // return average

        //sliding window ->
        
    }
}

const ma = new MovingAverage(3);
console.log(ma.next(1)) //1
console.log(ma.next(10)) //5.5
console.log(ma.next(4)) // 5
console.log(ma.next(4)) // 6

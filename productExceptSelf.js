class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [1, nums[0]]
        let post = [1, nums[nums.length-1]]
        let arr = []
        for(let i = 1; i < nums.length; i++){
            pre.push(nums[i]*pre[i])
        }
        for(let i = nums.length-2; i >= 0; i--){
            post.push(nums[i]*post[post.length-1])
        }
        for(let i = 0; i < nums.length; i++){
            arr.push(pre[i]*post[nums.length-1-i])
        }
        return arr
    }
}

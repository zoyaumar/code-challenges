var threeSum = function(nums) {
    let triplets = []
    nums = nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length-2; i++)
    {    
        let j = i+1
        let k = nums.length - 1
        if((i>0&&nums[i]!=nums[i-1])||i==0){
            while(j<k)
            {
                let sum = nums[i]+nums[j]+nums[k]
                if(sum==0){
                    triplets.push([nums[i], nums[j], nums[k]])
                    while(nums[j]==nums[j+1]) j++
                    j++
                    k--
                }
                else if(sum>0)
                    k--
                else
                    j++
            }
        }
    }
    return triplets
};

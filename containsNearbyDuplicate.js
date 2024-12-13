var containsNearbyDuplicate = function(nums, k) {
    let m = new Map();
    for(let i = 0; i < nums.length; i++){
        let el = nums[i]
        if(i-m.get(el)<=k){
            return true
        }
        else
            m.set(el, i)
    }
    return false
};

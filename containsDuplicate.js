/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return nums.length != nums.filter((el, index, arr) => index == arr.indexOf(el)).length
    return new Set(nums).size != nums.length
};

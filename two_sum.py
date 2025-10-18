from typing import List 
def two_sum(nums: List[int], target: int) -> List[int]:
    indices = {}
    for i in range(len(nums)):
        if target - nums[i] in indices:
            return [indices[target - nums[i]], i]
        indices[nums[i]] = i
    return []

print(twoSum([0, 3, 2, 5, 1], 4), "[1, 4]")

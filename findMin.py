class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums)==1:
            return nums[0]
        a = 0
        b = len(nums)-1
        if nums[a] < nums[b]:
            return nums[a]
        while a < b:   
            m = (b+a)//2
            if nums[m] > nums[a]:
                a = m
            else:
                b = m
        return nums[b+1]


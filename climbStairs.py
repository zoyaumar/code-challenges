class Solution:
    def climbStairs(self, n: int) -> int:
        nums = {}
        def dfs(i: int):
            if i < 0:
                return 0
            if i == 0:
                return 1
            if nums.get(i):
                return nums[i]
            nums[i] = dfs(i-1) + dfs(i-2)
            return nums[i] 
        return dfs(n)

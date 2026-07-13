class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums == []:
            return 0
        s = set(nums)
        longest = 1
        for x in s:
            if x-1 not in s:
                curr = 1
                while x + 1 in s:
                    curr+=1
                    x+=1
                if longest < curr:
                    longest = curr
        
        return longest



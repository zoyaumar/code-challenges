class Solution:
    def maxArea(self, heights: List[int]) -> int:
        j = len(heights)-1
        i = 0
        max = 0
        while i < j:
            while heights[i] <= 0:
                i+=1
            while heights[j] <= 0:
                j-=1
            container = min(heights[i], heights[j]) * (j-i) 
            if container > max:
                max = container
            if heights[i]>heights[j]:
                j-=1
            else:
                i+=1
        return max                

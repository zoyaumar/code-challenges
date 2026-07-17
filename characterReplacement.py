class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        if len(s) <= k+1:
            return len(s)
        i = 0
        j = 1
        maximum = k+1
        curr = {s[0]: 1}
        highest_char = 1
       
        while j <= len(s)-1:
            curr[s[j]] = curr.get(s[j], 0) + 1
            highest_char = max(highest_char, curr[s[j]])
            
            while j-i-highest_char >= k:
                curr[s[i]]-=1
                i+=1
            maximum = max(maximum, j-i+1)
            j+=1

        return maximum


        

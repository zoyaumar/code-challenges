class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) <= 1 or len(s)%2 != 0:
            return False
        
        d = {
            '(':')',
            '{':'}',
            '[':']',
        }
        if s[-1] in d:
            return False 
        st = []

        for ch in s:
            if ch in d:
                st.append(ch)
            elif st:
                if d[st[-1]]==ch:
                    st.pop()
                else:
                    return False
            else:
                return False

        return not st

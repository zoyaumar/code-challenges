function isPalindrome(s) {
        s = s.toLowerCase().split("").filter((i)=>i.match(/[a-z0-9]/))
        for(let c = 0; c < s.length/2; c++){
            if(s[c]!=s[s.length-c-1])
                return false
        }
        return true
}

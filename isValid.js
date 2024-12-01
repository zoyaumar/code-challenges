function isValid(s) {
        let arr = []
        for(let c = 0; c < s.length; c++){
            if(s[c]=="}"&&arr[arr.length-1]=="{")
                arr.pop()
            else if(s[c]=="]"&&arr[arr.length-1]=="[")
                arr.pop()
            else if(s[c]==")"&&arr[arr.length-1]=="(")
                arr.pop()
            else if(s[c]=="]"||s[c]=="}"||s[c]==")")
                return false;
            else    
                arr.push(s[c])
        }
        return arr.length == 0;
    }

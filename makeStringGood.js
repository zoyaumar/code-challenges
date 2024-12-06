var makeStringGood = function(s) {
    /* let len = 0
    while(s.length!=len){
        len=s.length
        for(let i=0; i<s.length-1; i++){
            if(s[i].toLowerCase()==s[i+1].toLowerCase() && s[i]!=s[i+1])
                s=s.replace(s[i]+s[i+1],'')
        }
    }
    return s */

    // with Stack
    let st = [] 
    for(let ch of s){
        if(st.length>0 && st[st.length-1].toLowerCase()==ch.toLowerCase() && ch!=st[st.length-1])
            st.pop()
        else
            st.push(ch)
    }
    
    return st.join('')
};

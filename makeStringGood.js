/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let len = 0
    while(s.length!=len){
        len=s.length
        for(let i=0; i<s.length-1; i++){
            if(s[i].toLowerCase()==s[i+1].toLowerCase() && s[i]!=s[i+1])
                s=s.replace(s[i]+s[i+1],'')
        }
    }
    return s
};

// O(nlog(n)+mlog(m))
var isAnagram = function(s, t) {
  let first = s.toLowerCase().split("").sort().join("")
  let sec = t.toLowerCase().split("").sort().join("")
  return first===sec
};

/* O(n+m)
if(s.length != t.length)
        return false;
  
    const myMap = new Map();
    for(let c of t.toLowerCase()){
      if(myMap.has(c))
        myMap.set(c, myMap.get(c)+1)
      else
        myMap.set(c, 1);
    }
  
    for(let c of s.toLowerCase()){
        if(myMap.get(c)<1||!myMap.has(c))
            return false;
        else
          myMap.set(c, myMap.get(c)-1)
    }
    return true;
*/    

function checkPermutation(s1, s2) {
      let j = s1.includes(s2[0])? -1:0
      for(let i = 0; i < s2.length; i++){
          if(!s1.includes(s2[i]))
              j=i 
          if(i-j == s1.length){
              if(s2.substring(j+1, i+1).split('').sort().join('') == s1.split('').sort().join(''))
                  return true
              else
                  j++
          }    
      }
      return false
  }

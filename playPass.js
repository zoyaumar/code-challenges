function playPass(s, n) {
    return s.split('').map((e,i)=>
 { 
      if(e.charCodeAt(0) <= 90 && e.charCodeAt(0) >= 65){
        let code = (e.charCodeAt(0) + n-65) % 26
        e = String.fromCharCode(code+65)
        e = i%2 == 1 ? e.toLowerCase():e
      }
      
      if(e.charCodeAt(0) <= 57 && e.charCodeAt(0) >= 48){
        e = 9 - Number(e)
      }
      
      return e
 }).reverse().join("")
}

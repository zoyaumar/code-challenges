function splitStrings(str){
  let arr = []
  while(str.length >=2){
    arr.push(str.slice(0,2))
    str = str.substring(2)
  }
  if(str.length == 1) 
    arr.push(str+'_')
  return arr
}

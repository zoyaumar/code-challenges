function highestScore(x){
  let word = ''
  let num = 0
  for(v of x.split(" ")){
    let temp = v.split('').reduce((acc, c) => acc + ((c+"").charCodeAt(0)-96), 0)
    if(temp > num){
      num = temp
      word = v
    }
  }
  return word
}

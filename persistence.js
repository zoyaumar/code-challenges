function persistence(num) {
  let product = num
  let multi = 0
  while(product >= 10){
    let temp = product
    product = 1
    while(temp>0){
       product *= temp%10
       temp = parseInt(temp/10)
    }
    multi++
  }
  return multi
}

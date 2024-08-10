function vampireTest(a, b) {
  let str = (a.toString()+b.toString()).split('').sort().join()
  let prod = ((a*b).toString()).split('').sort().join()
  return str == prod 
}

function minValue(values){
  return Number(values.filter((x, i) => values.indexOf(x) == i).sort().join(""))
}

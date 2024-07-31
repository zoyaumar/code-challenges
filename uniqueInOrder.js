function uniqueInOrder(iter){
  return Array.from(iter).filter((i, e) => i!=iter[e-1]) 
}

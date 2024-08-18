function findEvenIndex(arr)
{  
  //first solution
  for(let i = 0; i < arr.length; i++){
    if(arr.slice(0, i).reduce((acc, c) => acc+c, 0) == arr.slice(i+1).reduce((acc, c) => acc+c, 0))
      return i;
  }
  return -1;
  
  //second solution
  // return arr.findIndex((e, i, arr) => arr.slice(0, i).reduce((acc, c) => acc+c, 0) == arr.slice(i+1).reduce((acc, c) => acc+c, 0))
}

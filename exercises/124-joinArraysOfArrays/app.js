function joinArrayOfArrays(arr) {
  // your code here
  
  let newarr = [];
  for (i of arr){
    newarr = newarr.concat(i);
  }

  return newarr;
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

/* SOLUCION DADA
function joinArrayOfArrays(arr) {
  // your code here
  let aux = [];
  for (let e of arr) {
    aux = aux.concat(e);
  }
  return aux;
}
*/
function computeSumOfAllElements(arr) {
  // your code here

  let suma = 0;

  for (i of arr){
    suma += i;
  }

  return suma;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

/* SOLUCION DADA
function computeSumOfAllElements(arr) {
  // your code here
  let aux = 0;
  for (let e of arr) {
    aux += e;
  }
  return aux;
}
*/
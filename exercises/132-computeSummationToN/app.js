function computeSummationToN(n) {
  // your code here

  let suma = 0;

  for (let i=0;i<=n;i++){
    suma += i;
  }

  return suma;  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

/* SOLUCION DADA
function computeSummationToN(n) {
  // your code here
  let aux = 0;
  for (let e = 1; e < n + 1; e++) aux += e;
  return aux;
}
*/
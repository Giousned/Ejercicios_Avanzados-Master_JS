function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;

    for (let i=1;i<=n;i++){
        factorial *= i;
    }
    return factorial; 
}

let output = computeFactorialOfN(3); console.log(output); // --> 6
let output2 = computeFactorialOfN(4); console.log(output2); // --> 24

/* SOLUCION DADA
function computeFactorialOfN(n) {
  // your code here
  let aux = 1;
  for (let e = 1; e < n + 1; e++) aux *= e;
  return aux;
}
*/
function getStringLength(string) {
    // your code here
    
    let suma = 0;

    for (i in string){
        suma += 1;
    }

    return suma;
}

let output = getStringLength('hello');
console.log(output); // --> 5

/* SOLUCION DADA
function getStringLength(string) {
  // your code here
  return [...string].reduce((a) => a + 1, 0);
}
*/
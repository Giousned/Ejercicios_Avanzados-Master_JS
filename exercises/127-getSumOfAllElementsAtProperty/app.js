let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return 0;
        
    let suma = 0;

    obj[key].forEach(e => {
        suma += e;
    });

    return suma;
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

/* SOLUCION DADA
function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  let aux = 0;

  if (obj.hasOwnProperty(key) && obj[key].length > 0) {
    for (let e of obj[key]) {
      aux += e;
    }
  } else {
    return 0;
  }

  return aux;
}
*/
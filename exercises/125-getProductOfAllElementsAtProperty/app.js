let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return 0;

    let mul = 1;

    obj[key].forEach(e => {
      mul *= e;      // mul = mul *e
    });

    return mul;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

/* SOLUCION DADA
function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  let aux = 1;
  if (!obj[key] || typeof obj[key] != typeof [] || obj[key].length < 1) return 0;

  for (let e of obj[key]) {
    aux *= e;
  }

  return aux;
}
*/
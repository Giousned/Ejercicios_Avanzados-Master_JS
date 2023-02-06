
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];

    let newarr = [];

    obj[key].map(e =>{

      if (e%2==0) return newarr.push(e);

    });

    return newarr;
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

/* SOLUCION DADA

function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    let aux = []
    obj[key].map(item => item % 2 == 0 ? aux.push(item) : null)
    return aux;
  }
}
*/
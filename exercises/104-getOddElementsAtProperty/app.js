let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];

    let newarr = [];

    obj[key].forEach(e => {

      if (e%2!=0) newarr.push(e);
      
    });

    return newarr
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

/* SOLUCION DADA

function getOddElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    let aux = []
    obj[key].map(item => item % 2 != 0 ? aux.push(item) : null)
    return aux
  }
}

*/
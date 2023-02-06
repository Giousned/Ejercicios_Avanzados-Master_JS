let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];

    let small = obj[key][0];

    obj[key].forEach(e => {
      
      if (e<small) small = e;

    });

    return small;
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

/* SOLUCION DADA

function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    let aux = 999999999999999999
    obj[key].map(item => item < aux ? aux = item : null)
    return aux
  }
}

*/
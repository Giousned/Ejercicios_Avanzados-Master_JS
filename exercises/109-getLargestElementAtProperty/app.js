let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    
    if (!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];
  
    let big = 0;
  
    obj[key].forEach(e => {
        
      if (e>big) big = e;
  
    });
  
      return big;
}

let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

/*
let big = obj[key][0];
  
    obj[key].forEach(e => {
        
      if (e>big) big = e;
  
    });

*/

/* SOLUCION DADA
function getLargestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    let aux = 0
    obj[key].map(item => item > aux ? aux = item : null)
    return aux
  }
}
*/
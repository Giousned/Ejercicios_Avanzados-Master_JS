let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];
    
    let newarr = [];
    for (let i=0;i<obj[key].length;i++){
      if ((obj[key][i]).length%2==0) newarr.push(obj[key][i]);
    }
    return newarr;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

/* SOLUCION DADA

  if (!obj[key] || !Array.isArray(obj[key])) {
    return []
  } else {
    let aux = []
    obj[key].map(e => {
      e.length % 2 == 0 ? aux.push(e) : null
    })
    return aux;
  }
*/
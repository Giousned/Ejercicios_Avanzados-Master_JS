let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])) return [];

    let newarr = [];

    for (i in obj[key]){
      newarr.push(obj[key][i]**2);
    }
    return newarr;
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

/*
    for (i in obj[key]){
      newarr.push(Math.pow((obj[key][i]),2));
    }
*/

/* SOLUCION DADA

function getSquaredElementsAtProperty(obj, key) {
    // Your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
    else return obj[key].map(e => e * e);
}

*/
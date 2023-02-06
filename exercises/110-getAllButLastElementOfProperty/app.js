let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return [];

  let lastelem =  obj[key].pop();

  return  obj[key];
 
}


let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]


/* MAS SOLUCIONES



function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return [];

    let newarr = [];

    for (let i=0;i<obj[key].length-1;i++){

      newarr.push(obj[key][i])
      
    }
    
    return  newarr;
   
}

*/

/* SOLUCION DADA
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
    else { obj[key].pop(); return obj[key] }

}
*/
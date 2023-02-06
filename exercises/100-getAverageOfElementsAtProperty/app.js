function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      return 0;
  }

  let arr = obj[key];
  let suma = 0;
  let counts = 0;

  arr.forEach(e=>{
      suma += e;
      counts +=1;
  });

  return suma/counts;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 


/* SOLUCION DADA

  function getAverageOfElementsAtProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
        return 0;
    }
    
    let sum = 0;

    for (let i = 0; i < obj[key].length; i++) {
      sum+=obj[key][i] 
    }

    return sum / obj[key].length;
}

*/
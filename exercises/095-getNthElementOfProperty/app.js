// Write your function here
function getNthElementOfProperty(obj,key,item){
    if (!obj[key] || item > obj[key].length-1 || obj[key].length == 0 || !Array.isArray(obj[key])){
        return undefined;
    }

    let arr = [];
    arr = obj[key];

    return arr[item];
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2 

  /* SOLUCION DADA

  function getNthElementOfProperty(obj, key, n){
    if(!obj[key] || !Array.isArray(obj[key]) || n >= obj[key].length){
        return undefined
    }
    return obj[key][n];
}

*/
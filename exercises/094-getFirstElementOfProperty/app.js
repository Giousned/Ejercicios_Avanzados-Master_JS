// Write your function here
function getFirstElementOfProperty(obj,key){
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return undefined;
    }

    let arr = [];
    arr = obj[key];

    return arr[0];
}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1  


/* SOLUCION DADA
  function getFirstElementOfProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key])){
        return undefined
    }

    return obj[key][0]
}

*/
let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    let keysObj1 = Object.keys(obj1)
    let keysObj2 = Object.keys(obj2)
    
    for (let key of keysObj2) {
        if (!keysObj1.includes(key)) {
          obj1[key] = obj2[key]
        }
    }
    return Object;
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

/* SOLUCIONES INTERNET
    mergeObjects = (firtsObj, secondObj) => {
  Object.keys(secondObj).forEach(key => {
    if (!firtsObj[key]) firtsObj[key] = secondObj[key]
  })
  return firtsObj
}

let res = mergeObjects(obj1, obj2)
console.log(res)



OTRAAAAAA:

function extend(obj1, obj2) {
  for (let [llave, valor] of Object.entries(obj2)) {
    if (!obj1.hasOwnProperty(llave)) {
      obj1[llave] = valor;
    }
  }
  console.log(obj1);
}

extend(obj1,obj2);
*/
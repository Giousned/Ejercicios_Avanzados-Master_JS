function fromListToObject(array) {
  // your code here

  let obj = {};
  let objkey = "";
  let keyvalor = "";

  for (let i=0;i<array.length;i++){

    objkey = array[i][0];
    keyvalor = array[i][1];

    obj[objkey] = keyvalor

  }

  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }


/* SOLUCION DADA
function fromListToObject(array) {
  // your code here
  let arr = {};
  for (let e of array) {
    arr[e[0]] = e[1];
  }
  return arr;
}

let output = fromListToObject([
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
]);
console.log(output); // => { make: 'Ford', model: 'Mustang', year: 1964 }
*/
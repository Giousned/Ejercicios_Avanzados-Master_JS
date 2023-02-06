function transformFirstAndLast(array) {
  // your code here

  let obj = {};
  let objkey = "";
  let keyvalor = "";

  objkey = array[0];
  keyvalor = array[array.length - 1];
  obj[objkey] = keyvalor;

  return obj;

}


let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }

let output2 = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output2); // { Kevin: "Spacey" }

/* SOLUCION DADA
let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

function transformFirstAndLast(array) {
  // your code here
  let aux = { [array[0]]: array[array.length - 1] };

  return aux;
}

console.log(transformFirstAndLast(arr));
*/
function squareElements(arr) {
  // your code here

  let newarr = [];
 
  for (i in arr){

    newarr.push(Math.pow(arr[i],2));

  }

  return newarr;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

/* MAS SOLUCIONES

  for (i in arr){

    newarr.push(arr[i]**2);

  }

*/

/* SOLUCION DADA
function squareElements(arr) {
  // your code here
  let result = [];
  for (let e of arr) {
    result.push(e * e);
  }
  return result;
}
*/
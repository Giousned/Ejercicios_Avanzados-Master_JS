function getLargestElement(arr) {
  // your code here
  if (arr.length == 0) return 0;

  let big = 0;

  for (i of arr){
    if (i>big) big = i;
  }

  return big;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

/* SOLUCION DADA
function getLargestElement(arr) {
  // your code here
  let aux = 0;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    if (aux < e) aux = e;
  }
  return aux;
}
*/
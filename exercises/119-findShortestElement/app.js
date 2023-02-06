function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) return "";

    let small = arr[0];

    for (i of arr){
        if (i.length<small.length) small = i;
    }

    return small;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

/* SOLUCION DADA
function findShortestElement(arr) {
  // your code here
  let aux = '99999999999999999999999999999999999999999999999';
  if (arr.length < 1) return '';
  for (let e of arr) {
    if (e.length < aux.length) aux = e;
  }
  return aux;
}
*/
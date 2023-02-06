function findSmallestElement(arr) {
    // your code here
    if (arr.length == 0) return 0;

    let small = arr[0];

    for (i of arr){
        if (i<small) small = i;
    }

    return small;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

/* SOLUCION DADA
function findSmallestElement(arr) {
  // your code here
  let aux = 9999999999;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    if (e < aux) aux = e;
  }
  return aux;
}
*/
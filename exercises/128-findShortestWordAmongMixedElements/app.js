function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0 || !arr.find(e => typeof e === 'string')) return "";

    let small = 999999999999999999999999999999999999999;
    let strsmall = ""

    for (i of arr){
        if (typeof i === 'string' && small>i.length) {strsmall = i; small = i.length}
    }
        
    return strsmall;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

/* SOLUCION DADA
function findShortestWordAmongMixedElements(arr) {
  // your code here
  let aux = '9999999999999999999999';

  if (arr.length > 0) {
    let hasString = arr.find((e) => typeof e == 'string');
    if (hasString != undefined) {
      arr.map((e) => {
        if (e.length < aux.length) {
          aux = e;
        }
      });
    } else {
      aux = '';
    }
  } else {
    aux = '';
  }
  return aux;
}
*/
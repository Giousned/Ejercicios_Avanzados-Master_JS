function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length === 0 || !arr.find(e => typeof e === 'string')) return "";

    let large = 0;
    let key = "";

    for (let i=0;i<arr.length;i++){
        if (typeof arr[i] === 'string' && arr[i].length>large){
            large = arr[i].length;
            key = arr [i];
        }
    }

    return key;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

let output2 = getLongestWordOfMixedElements([3, 'up', 5, 'word', 3, 1]);
console.log(output2); // --> 'word'

/* SOLUCION DADA
function getLongestWordOfMixedElements(arr) {
  // your code here
  let aux = '';
  if (arr.length > 0) {
    let hasString = arr.find((e) => typeof e == 'string');
    if (hasString != undefined) {
      arr.map((e) => {
        if (e.length > aux) aux = e;
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
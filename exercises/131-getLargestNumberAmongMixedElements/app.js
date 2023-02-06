function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0 || !arr.find(e => typeof e === 'number')) return 0;

    let big = 0;

    for (i in arr){
        if (typeof arr[i] === 'number' && arr[i]>big) big = arr[i];
    }

    return big;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

/* OTRA SOLUCION
function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0 || !arr.find(e => typeof e === 'number')) return 0;

    let big = 0;

    for (i of arr){
        if (typeof i === 'number' && i>big) big = i;
    }

    return big;
}
*/

/* SOLUCION DADA
function getLargestNumberAmongMixedElements(arr) {
  // your code here
  let aux = 0;
  if (arr.length > 0) {
    let hasNumbers = arr.find((e) => typeof e == 'number');
    if (hasNumbers) {
      arr.map((e) => {
        if (e > aux) {
          aux = e;
        }
      });
    } else {
      aux = 0;
    }
  } else {
    return 0;
  }
  return aux;
}
*/
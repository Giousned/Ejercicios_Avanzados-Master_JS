function getLongestElement(arr) {
    // your code here
    if (arr.length == 0) return "";

    let long = arr[0];

    for (i of arr){
        if (i.length>long.length) long = i;
    }
    
    return long;
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

/*
function getLongestElement(arr) {
  // your code here
  let aux = '';
  if (arr.length < 1) return '';
  for (let e of arr) {
    if (e.length > aux.length) aux = e;
  }
  return aux;
}
*/
function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length == 0) return 0;

    let long = arr[0].length;

    arr.forEach(e => {
       if (e.length<long) long = e.length; 
    });
    
    return long;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

/* SOLUCION DADA
function getLengthOfShortestElement(arr) {
    // your code here
    let aux = 9999999999;
    if (arr.length < 1) return 0;
    for (let e of arr) {
      if (e.length < aux) aux = e.length;
    }
    return aux;
  }

*/
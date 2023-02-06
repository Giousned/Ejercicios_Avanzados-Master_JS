function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length==0) return 0;

  let mul = 1;

  arr.forEach(e => {

    mul = mul * e;
   
  });

  return mul;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

/* SOLUCION DADA
function computeProductOfAllElements(arr) {
  // your code here
  let result = 1;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    result *= e;
  }
  return result;
}
*/
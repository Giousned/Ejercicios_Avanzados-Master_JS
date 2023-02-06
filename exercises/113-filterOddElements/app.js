function filterOddElements(arr) {
  // your code here

  let newarr = [];

  arr.map(e => {

    if (e%2!=0) newarr.push(e);
  });

  return newarr;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

/* MAS SOLUCIONES

.map
.foreach
for (let i=0;i<arr.length;i++)
for (i in arr)
for (i of arr)

*/

/* SOLUCION DADA
function filterOddElements(arr) {
  // your code here
  let result = [];
  for (let e of arr) {
    if (e % 2 !== 0) result.push(e);
  }
  return result;
}
*/
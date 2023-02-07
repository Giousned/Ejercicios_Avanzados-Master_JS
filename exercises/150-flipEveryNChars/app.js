function flipEveryNChars(input, n) {
    // your code here


    let arr = [...input];
    let newArr = [];
    let newArr2 = [];

    let arrFinal = [];

    let p = n;


    for (let i=0;i<input.length;i+=n){

        newArr = arr.slice(i,p);
        newArr.reverse();

        newArr = newArr.join("");

        arrFinal.push(newArr);
        p += n;

    }

    arrFinal = arrFinal.join("");

    return arrFinal;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

/* SOLUCION DADA
function flipEveryNChars(input, n) {
  // your code here
  let reges = `(.{${n}})`;
  let parsed = new RegExp(reges);

  let result = input
    .split(parsed)
    .map((e) => e.split('').reverse().join(''))
    .join('');
  return result;
}
*/
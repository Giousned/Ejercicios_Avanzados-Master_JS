function flipPairs(input){
    // your code here

    let arr = [...input];
    let newArr = [];

    for (let i=0;i<input.length;i+=2){

        newArr.push(arr[i+1],arr[i]);

    }

    let newArr2 = newArr.join("");

    return newArr2;
}

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

/* SOLUCION DADA
function flipPairs(input) {
  // your code here
  let result = input.replace(/(.)(.)/g, '$2$1');
  //   input.split('').reverse().join('');
  return result;
}
*/
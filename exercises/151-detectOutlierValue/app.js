function detectOutlierValue(string) {
    // your code here

    let arr = [];
    let contadorPar = 0;
    let contadorImpar = 0;
    let indiceValor = 0;

    arr = string.split(" ");

    arr.forEach(e => {

        if (e%2 === 0) contadorPar += 1;
        else if (e%2 !== 0) contadorImpar += 1;
        
    });

    if (contadorPar > contadorImpar){
        indiceValor = arr.findIndex(e => (e%2 !== 0));
        }

    else indiceValor = arr.findIndex(e => (e%2 === 0));

    return indiceValor+1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2

/* OTRA SOLUCION
    if (contadorPar > contadorImpar){
        arr.forEach(e =>{
            if (e%2 !== 0) indiceValor = arr.indexOf(e);
        });
    }
    else {
        arr.forEach(e =>{
            if (e%2 === 0) indiceValor = arr.indexOf(e);
        });
    }
*/

/* SOLUCION DADA
function detectOutlierValue(string) {
  // your code here
  let oddNumbers = 0;
  let evenNumbers = 0;
  let result = string.split(' ');
  for (let x of result) {
    if (Number.parseInt(x) % 2 == 0) evenNumbers += 1;
    if (Number.parseInt(x) % 2 != 0) oddNumbers += 1;
  }
  if (evenNumbers > oddNumbers) {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 != 0) return x + 1;
    }
  } else {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 == 0) return x + 1;
    }
  }
}
*/
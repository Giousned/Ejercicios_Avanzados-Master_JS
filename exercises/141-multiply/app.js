function multiply(num1, num2) {
    // your code here

    let multiplicarSumando = 0;
    
    if (num1>0 && num2>0){
        for (let i=0;i<num2;i++) multiplicarSumando += num1;
    }

    if (num1<0 && num2<0){
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
        for (let i=0;i<num2;i++) multiplicarSumando += num1;
    }

    if (num1<0){
        for (let i=0;i<num2;i++) multiplicarSumando += num1;
    }

    if (num2<0){
        for (let i=0;i<num1;i++) multiplicarSumando += num2;
    }

    return multiplicarSumando;
}

let output = multiply(4, 7);
console.log(output); // --> 28
let output2 = multiply(-4, 7);
console.log(output2); // --> -28
let output3 = multiply(4, -7);
console.log(output3); // --> -28
let output4 = multiply(-4, -7);
console.log(output4); // --> 28

/* 
Math.abs(num) => Always positive
-Math.abs(num) => Always negative
*/

/* SOLUCION DADA
function multiply(num1, num2) {
  // your code here
  let aux = 0;
  if (num1 < 0) {
      for (let times = 0; times < num2; times++) aux += num1;
  } else {
      for (let times = 0; times < num1; times++) aux += num2;
  }
  return aux;
}
*/
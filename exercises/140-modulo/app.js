function modulo(num1, num2) {
    // your code here

    let division = num1 / num2;

    let str = division.toString();

    let strdecimal = "";

    if (division<0) { 
        strdecimal = str.slice(0,1);
        let coma = str.indexOf('.');
        strdecimal += str.slice(coma);
    } 

    if (division>0) {
        let coma = str.indexOf('.');
        strdecimal = str.slice(coma);
    } 

    let numdecimal = Number(strdecimal);

    let resto = numdecimal*num2;

    return resto;
}

let output = modulo(25, 4);
console.log(output); // --> 1

let output2 = modulo(-25, 4);
console.log(output2); // --> -1

/* SOLUCION DADA
function modulo(num1, num2) {
  // your code here
  let i = 0;
  if(num1 > 0){
      while (i < num1) {
          if(i+num2 > num1) break;
          i += num2
      }
      
      return num1 - i;
  } else {
      while (i > num1) {
          if(i-num2 < num1) break;
          i -= num2
      }
      
      return num1 - i;
  }
}
*/
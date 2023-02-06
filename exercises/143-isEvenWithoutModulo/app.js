function isEvenWithoutModulo(num) {
    // your code here

    if (num === 0) return true;

    num = Math.abs(num);

    let multiplicacionSumando = 0;
    while (multiplicacionSumando<num){

        multiplicacionSumando += 2;

    }

    let resto = 0;

    resto = num - multiplicacionSumando;

    if (resto === 0) return true;
    else return false;

}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true

/* OTRA SOLUCION
    if (num === 0) return true;

    num = Math.abs(num);

    let division = num/2;

    if (Number.isInteger(division) === true) return true;
    else return false;
*/

/* SOLUCION DADA
function isEvenWithoutModulo(num) {
  // your code here
  let aux = true;
  if (num >= 0) {
      for (let x = -1; x <= num + 1; x += 2) {
          if (x === num) aux = false;
      }
  } else {
      for (let x = -1; x >= num - 1; x -= 2) {
          if (x === num) aux = false;
      }
  }
  return aux;
}
*/
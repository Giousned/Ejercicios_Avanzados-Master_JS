function isOddWithoutModulo(num) {
    // your code here

    if (num === 0) return false;

    num = Math.abs(num);

    let division = num/2;

    if (Number.isInteger(division) === true) return false;
    else return true;

}
let output = isOddWithoutModulo(17);
console.log(output); // --> true

/* OTRA SOLUCION MIA


    let multiplicacionSumando=0;
    while (multiplicacionSumando<num){

        multiplicacionSumando += 2;

    }

    let resto = 0;

    resto = num - multiplicacionSumando;

    if (resto === 0) return false;
    else return true;

*/


/* SOLUCION DADA
function isOddWithoutModulo(num) {
  // your code here
  let aux = true;
  if(num >= 0){
      for (let x = 0; x <= num + 1; x += 2) {
          if (x === num) aux = false;
      }
  } else {
      for (let x = 0; x >= num - 1; x -= 2) {
          if (x === num) aux = false;
      }
  }
  return aux;
}
*/
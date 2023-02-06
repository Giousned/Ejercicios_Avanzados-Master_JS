function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here

  let compoundInterest = 0;

  compoundInterest = principal * Math.pow(( 1 + interestRate/compoundingFrequency ),(compoundingFrequency*timeInYears)) - principal;

  return compoundInterest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543

/* FORMULA INTERES COMPUESTO

IC = Ci * (1 + %/n)^n*t

IC: Interes compuesto
Ci: Capital inicial: 1500€
%: Tasa interes: 4.3%: 0.043
n: Frecuencia de capitalizacion: 4
t: Tiempo en años: 6

*/

/* SOLUCION DADA
function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  // your code here
  let aux = 1 + interestRate / compoundingFrequency;
  let aux2 = aux ** (compoundingFrequency * timeInYears);
  let aux3 = principal * aux2;
  return aux3 - principal;
}
*/

function calculateBillTotal(preTaxAndTipAmount) {
    // your code here

    let impuesto = 0;
    let propina = 0;
    let billtotal = 0;

    impuesto = preTaxAndTipAmount * 9.5 / 100;
    propina = preTaxAndTipAmount * 15 /100;

    billtotal = preTaxAndTipAmount + impuesto + propina;

    return billtotal
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9

/* SOLUCION DADA
function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  let tax = preTaxAndTipAmount * 0.095;
  let tip = preTaxAndTipAmount * 0.15;
  return preTaxAndTipAmount + tax + tip;
}
*/
function computeSumBetween(num1, num2) {
    // Your code here

    if (num2<num1) return 0;

    let suma = 0;

    for (let i=num1;i<num2;i++){
        suma += i;
    }

    return suma;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9

/* SOLUCION DADA
function computeSumBetween(num1, num2) {
    // Your code here
    if (num1 > num2) return 0;
    let aux = 0;
    for (let i = num1; i < num2; i++) aux += i;
    return aux;
}
*/
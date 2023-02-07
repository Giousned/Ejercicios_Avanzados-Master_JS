function average(array_of_numbers) {
  // process array of numbers
 
  return sum(array_of_numbers)/array_of_numbers.length;
}

function sum(numbers) {

  let suma = 0;

  for (let i of numbers){
    suma += i;
  }

  return suma 
}

console.log(average([1, 2]));

/* SOLUCION DADA
function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers) / array_of_numbers.length;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
*/
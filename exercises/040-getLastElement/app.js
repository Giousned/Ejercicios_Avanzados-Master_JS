function getLastElement(array) {
  // Add your code after this line
  if (array.length === 0) return undefined;
  else return array[array.length-1];
}

let output = getLastElement([1, 2, 3, 4]);
console.log(output);
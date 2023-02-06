function getFirstElement(array) {
  // Add your code after this line
  if (array.length === 0) return undefined;
  else return array[0];
}

let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
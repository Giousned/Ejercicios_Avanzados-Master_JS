function getAllElementsButFirst(array) {
  // your code here
  return array.splice(1);  
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output);
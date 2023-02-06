function getAllElementsButLast(array) {
    // your code here
    return array.splice(0,array.length-1);
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output);
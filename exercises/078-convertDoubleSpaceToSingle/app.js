function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.split("  ").join(" ");
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

// let split = str.split('  ');
// let joinSpace = split.join(' ');
// return joinSpace
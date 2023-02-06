function getAllLetters(str) {
    // your code here
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        str[i] = arr.push(str[i]);
    }
    return arr;    
}

let output = getAllLetters('Radagast');
console.log(output);
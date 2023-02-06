function repeatString(string, num) {
    // your code here

    let newstr = "";

    for (let i=0;i<num;i++){
        newstr += string;
    }
    return newstr;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

/* SOLUCION DADA
function repeatString(string, num) {
  // your code here
  return string.repeat(num);
}
*/
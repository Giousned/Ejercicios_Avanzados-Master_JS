function sumDigits(num) {
    // your code here
    
    let str = "";
    let suma1 = 0;
    let suma = 0;

    if (num<0){
        str = num.toString()
        for (let i=2;i<str.length;i++){
            suma1 += Number(str[i]);
        }
        return suma1-str[1];
    } 

    else if (num>0){
        string = num.toString()
        for (i of string){
            suma += Number(i);
        }
        return suma;
    }
}

let output = sumDigits(-316);
console.log(output); // --> 4

let output2 = sumDigits(1148);
console.log(output2); // --> 14


/* SOLUCION DADA
function sumDigits(num) {
  // your code here
  let strNum = num.toString();
  let aux = 0;
  let result = 0;
  while (strNum[aux] != undefined) {
    if (strNum[aux] === '-') {
      let aux2 = strNum[aux] + strNum[aux + 1];
      aux2 = parseInt(aux2);
      result += aux2;
      aux += 2;
    } else {
      result += parseInt(strNum[aux]);
      aux++;
    }
  }
  return result;
}
*/
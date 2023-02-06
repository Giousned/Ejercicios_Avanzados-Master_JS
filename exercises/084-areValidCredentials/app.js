// Write your function here
function areValidCredentials(name, pass) {
    // Write your function here
    if (pass.length>=8 && name.length>3) return true;
    else  return false;
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero

/* SOLUCION DADA
function areValidCredentials(name, pass){
    return name.length > 3 && pass.length >= 8 ? true : false;
}
*/
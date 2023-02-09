function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set

  if (text.length === 0) return true;

  let objSet = {};
  let cadena = text.toLowerCase();

  objSet = new Set(cadena);

  if(cadena.length !== objSet.size) return false
    else return true
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false

/* OTRA SOLUCION
function isIsogram(text) {
  if (text.length === 0) return true;

  let obj = {};
  let cadena = text.toLowerCase();
  let valorRepe = [];

  for (let i of cadena){
    if(obj[i]) obj[i] += 1;
    else obj[i] = 1; 
  }

  valorRepe = Object.values(obj).filter(e => e>1);

  if(valorRepe.length>0) return false
    else return true
}
*/

/* SOLUCION DADA
function isIsogram(text) {
  const chars = {};
  for (const char of text) {
    chars[char] = (chars[char] || 0) + 1;
  }
  let result = Object.entries(chars)
    .filter((char) => char[1] > 1)
    .map((char) => char[0]);
  if (result.length > 0) return false;
  else return true;
}
*/
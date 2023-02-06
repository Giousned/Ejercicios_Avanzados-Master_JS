function getLongestOfThreeWords(word1, word2, word3) {
    // your code here

    if (word1.length>word2.length && word1.length>word3.length) return word1;
    else if (word2.length>word1.length && word2.length>word3.length) return word2;
    else if (word1.length>word2.length && word1.length<word3.length) return word3;
    else if (word2.length>word1.length && word2.length<word3.length) return word3;
    else return word1;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

/* SOLUCION DADA
function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  let aux = '';
  if (word1.length > aux.length) aux = word1;
  if (word2.length > aux.length) aux = word2;
  if (word3.length > aux.length) aux = word3;
  return aux;
}
*/
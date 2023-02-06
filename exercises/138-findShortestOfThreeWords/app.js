function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let small = 99999999999999999999999999999999999999999999;

    if (word1.length<small) small = word1;
    if (word2.length<small.length) small = word2;
    if (word1.length<small.length) small = word3;

    return small;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

/* SOLUCION DADA
function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  let aux = '999999999999999999999999999999';
  if (word1.length < aux.length) aux = word1;
  if (word2.length < aux.length) aux = word2;
  if (word3.length < aux.length) aux = word3;
  return aux;
}
*/
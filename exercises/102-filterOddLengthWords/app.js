function filterOddLengthWords(words) {
    // your code here
    if (words.length==0) return [];

    let newarr = [];
    for (let i=0;i<words.length;i++){
        if (words[i].length%2!=0) newarr.push(words[i]);
    }
    return newarr;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']


/* SOLUCION DADA
  let aux = []
  words.map(w => {
      w.length % 2 !== 0 ? aux.push(w) : null
  })
  return aux;
*/
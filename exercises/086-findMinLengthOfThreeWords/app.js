// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3) {
    // Write your function here
    let palabra=0;
    word1.length<word2.length ?palabra=word1 :palabra=word2;
    word1.length<word3.length ?palabra=word1 :palabra=word3;
    word2.length<word3.length && word2.length<word1.length  ?palabra=word2 :palabra=word1;
    return palabra.length;
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

/* SOLUCION DADA
function findMinLengthOfThreeWords(a, b, c){
    if(a.length < b.length && a.length < c.length){
        return a.length
    }else if(b.length < a.length && b.length < c.length){
        return b.length
    }else{
        return c.length
    }
}
*/
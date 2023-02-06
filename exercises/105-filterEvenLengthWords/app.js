function filterEvenLengthWords(words) {
    // your code here

    if (words.length==0 || !Array.isArray(words)) return [];

    let newarr = [];

    words.forEach(e => {

        if (e.length%2==0) return newarr.push(e);
        
    });

    return newarr;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

let output2 = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output2); // --> ['word', 'computer']

/* SOLUCION DADA
function filterEvenLengthWords(words) {
    // your code here
    let aux = []
    words.map(item=>{
        if (item.length % 2 == 0) aux.push(item)
    })
    return aux
}
*/
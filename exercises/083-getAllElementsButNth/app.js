function getAllElementsButNth(array, n) {
    // Write your function here
    let newArr = [];
    for (let i=0;i<array.length;i++){
        if (i!=n) newArr.push(array[i]);
    }

    return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

/* SOLUCION DADA
function getAllElementsButNth(array, n) {
    // Write your function here
    array.splice(n, 1);
    return array
}
*/
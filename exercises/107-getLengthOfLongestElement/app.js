function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length==0) return 0;

    let long = 0;

    for (let i=0;i<arr.length;i++){

        if(arr[i].length>long) long = arr[i].length;

    }

    return long;

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

/* SOLUCION DADA
function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length < 1) return 0
    else {
        let aux = 0
        arr.map(item=> item.length > aux ? aux = item.length : null)
        return aux;
    }
}
*/
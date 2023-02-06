function addToFrontOfNew(arr, element) {
    // Write your function here
    let newarr = [];
    newarr.push(element);
    newarr = newarr.concat(arr);
    return newarr;    
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

/* SOLUCION DADA
    let newArr = [];
    newArr.push(element)

    arr.forEach(e=>{
        newArr.push(e);
    })
    
    return newArr;
}
*/
function removeFromBack(arr) {
    // your code here
    let lastelement = arr.pop();
    return arr;
}

let output = removeFromBack([1, 2, 3]);
console.log(output);

/*
function removeFromBack(arr) {
    // your code here
    return arr.slice(0,-1)
}
*/
function addToBackOfNew(arr, element) {
    // Write your function here
    let newArr = [];
    arr.forEach(e=>{
        newArr.push(e)
    });

    newArr.push(element);
    return newArr;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
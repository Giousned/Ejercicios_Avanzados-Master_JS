// Write your function here
function keep (arr,n){
    let newArr = [];

    for (let i=0; i<arr.length; i++){
        if (arr[i]==n) newArr.push(arr[i]);
    }

    return newArr;

}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]
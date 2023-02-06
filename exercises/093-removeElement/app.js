// Write your function here
function removeElement(arr,item){
    if (!arr) return [];

    let newArr = [];

    arr.forEach(e => {
        if (e!=item) newArr.push(e);
    });

    return newArr;

}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]


/* SOLUCION DADA

function removeElement(arr, n){
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != n){
          newArr.push(arr[i])  
        }
    }

    return newArr
}

*/
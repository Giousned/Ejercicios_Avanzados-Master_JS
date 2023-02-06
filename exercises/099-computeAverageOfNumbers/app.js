// Write your function here !
function computeAverageOfNumbers(arr){
    if(arr.length == 0){
        return 0;
    }

    let suma = 0;
    let counts = 0;

    arr.forEach(e=>{
        suma += e;
        counts += 1;
    });

    return suma/counts;
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3


/* SOLUCION DADA

function computeAverageOfNumbers(nums) {
    if (nums.length == 0) return 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++){
      total += nums[i];
    }
    let avg = total / nums.length;
    return avg;
  }

*/
function findPairForSum(array, number){

    let elementoQuitado = 0;
    let newArr = [];

    for (let i = 0; i<array.length; i++){
        elementoQuitado = array.shift();

        for (let j=0; j<array.length; j++){
            if (elementoQuitado+array[j] === number) newArr.push(elementoQuitado,array[j]);        
        };

        if (newArr.length!=0) break;
    }

    return newArr;
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

let pair2 = findPairForSum([3, 34, 4, 12, 5, 2, 6], 9);
console.log(pair2); // --> [3, 6]

/* SOLUCION DADA
function findPairForSum(array, number) {
  // retorna el primer par para suma que encuentra
  for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
          if (array[i] + array[j] === number) {
              return [array[i], array[j]]
          }
      }
  }
}
*/
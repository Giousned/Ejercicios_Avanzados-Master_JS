function search(array, value) {
  // your code here

  let suma = 0;
  let media = 0;

  let corte = 0;

  let newArr = [...array];

  do {

    suma = newArr.reduce((a,b) => a+b, 0);
    console.log(suma);
    media = Math.floor(suma/newArr.length);
    console.log(media);
    corte = Math.floor(newArr.length/2);

    if (media == value) break;

    else if (array.length%2 === 0){
      if (media < value) {newArr = newArr.slice(corte);
        console.log(newArr);}
    
      else {newArr = newArr.slice(0,corte);}
    }

    else {
      if (media < value) {newArr = newArr.slice(corte+1);
        console.log(newArr);}
    
      else {newArr = newArr.slice(0,corte); console.log(newArr);}      
    }

  } while (newArr.length != 0);

  if (array.indexOf(media) != - 1 && newArr.length != 0) return Number(array.indexOf(media));
  else return null;

}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4

// let arr2 = [1, 2]
// console.log(search(arr2, 2)); // => 1 numero

// let arr3 = [1, 3, 16, 22, 31, 33, 34]
// console.log(search(arr3, 3)); // => 1
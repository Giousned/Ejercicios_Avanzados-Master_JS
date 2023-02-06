function getAllKeys(obj) {
  // your code here

  let newArr = [];

  for (let key in obj) newArr.push(key);

  return newArr;
}


let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // ['name', 'age', 'hasPets']

/* HAY UN METODO INTRINSECO DE OBJECT: Object.keys que hace exactamente eso, acceder a los keys del objeto
Pero aquí no te dejan usarlo.
*/

/*SOLUCION DADA
function getAllKeys(obj) {
  // your code here
  let arr = [];
  for(let element in obj){
    arr.push(element);
  }
  return arr
}
*/

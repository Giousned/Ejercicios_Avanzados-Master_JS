function listAllValues(obj) {
  // your code here

  let newArr = [];

  for (let key in obj) newArr.push(obj[key]);

  return newArr;

}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]

/* OTRA SOLUCION USANDO METODO INTRINSECO DE OBJECT: Object.values()
function listAllValues(obj) {
  // your code here

  return Object.values(obj);
}
*/

/* SOLUCION DADA
function listAllValues(obj) {
  // your code here
  let arr = [];
  for(let element in obj){
    arr.push(obj[element]);
  }
  return arr
}
*/
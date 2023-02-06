function convertObjectToList(obj) {
  // your code here

  let newArr = [];

  for (let item in obj){
    let arr = [];

    arr.push(item);
    arr.push(obj[item])

    newArr.push(arr);
  }

  return newArr;
}

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]


/* SOLUCION DADA
function convertObjectToList(obj) {
  // your code here
  let result = [];
  for (let element in obj) {
    result.push([element, obj[element]]);
  }
  return result;
}
*/
function transformEmployeeData(array) {
  // your code here
  let result = [];
  for (let x of array) {
    let aux = {};
    for (let y of x) {
      aux[y[0]] = y[1];
    }
    result.push(aux);
  }
  return result;
}

let output = transformEmployeeData([
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
]);

console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]

/* ASI LO HICE AL PRINCIPIO Y EN LA SOLUCION ESAN MAS MENOS ESTO PERO CON FOR...OF Y NO FOREACH
  arraySplited.forEach(e => {

    e.forEach(item => {

      obj[item[0]] = item[1];

    })

  });
*/

/* MI SOLUCION QUE DA EL MISMO RESULTADO PERO NO PASA EL TEST, IMAGINO QUE POR LOS FLATS
function transformEmployeeData(array) {
  // your code here

  let obj1 = {};
  let obj2 = {};
  let splitedArray = [];

  function spliceArrayAndFlatted (array) {
    splitedArray = array.splice(0,1);
    flattened1 = splitedArray.flatMap(num => num);
    flattened2 = flattened1.flatMap(num => num);

    flattened3 = array.flatMap(num => num);
    flattened4 = flattened3.flatMap(num => num);

    return flattened2;
  }

  const arraySplited = spliceArrayAndFlatted(array);

  for (let i=0;i<arraySplited.length;i +=2){
    obj1[arraySplited[i]] = arraySplited[i+1];
  }

  for (let i=0;i<flattened4.length;i +=2){
    obj2[flattened4[i]] = flattened4[i+1];
  }

  return [obj1,obj2];
}
*/
function findSmallestNumberAmongMixedElements(arr) {
  // your code here

  if (arr.length === 0 || !arr.find(e => typeof e === 'number')) return 0;

  let small = 9999999999999999999999999999999999999;

  arr.forEach(e => {
    if (typeof e === 'number' && e<small) small = e;
  });
  return small;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

/* OTRA SOLUCION DADA INTERNET
function findSmallestNumberAmongMixedElements(arr) {
	var result = 0;
	var count = 100;
	var num;
	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
			num = arr[i];
			if (num < count){
				count = num;
				result = num;
			}
		}
	}
	return result;
}
*/

/* SOLUCION DADA
function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let aux = 99999999;
  if (arr.length > 0) {
    let hasNumber = arr.find((e) => typeof e == 'number');
    if (hasNumber != undefined) {
      arr.map((e) => {
        if (e < aux) aux = e;
      });
    } else {
      aux = 0;
    }
    return aux;
  } else {
    return 0;
  }
}
*/
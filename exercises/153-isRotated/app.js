function isRotated(str1, str2) {
    // your code here
    let fracc = str1.split('');
    let aux = [];
    
    for (let i of fracc) aux.push(str2.indexOf(i))  
    let result = !aux.includes(-1);

    return result;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false
console.log(isRotated('Learning is fun', 'Lr aen ngiiufs')) // => TRUE, NO SÉ PORQUE SI NO TIENEN LA MISMA LONGITUD, ENTONCES POR DEFINICION DEBERIA SER FALSE


/* MI SOLUCION QUE DA ERROR PORQUE AL HACER LA PRUEBA METE 2 STRINGS DE DIFERENTES LONGITUDES; CON LO CUAL FALSO DE PRIMERAS
PERO SEGUN ELLOS ES VERDAD, ENTONCES ME DA LO CONTRARIO A ELLOS

FUNCION JSON.stringify SACADA DE INTERNET, CONVIERTE OBJETO A STRING Y COMPARA SI ES IGUAL.

function isRotated(str1, str2) {
    // your code here

    function countAllCharacters (string) {
        let obj = {};

        if(string.length == 0){
            return {};
        }

        for(let i = 0; i < string.length; i++){
            if(obj[string[i]]) obj[string[i]] = obj[string[i]] + 1;
                else obj[string[i]] = 1;
        }
    
        return obj;
    }

    const objStr1 = countAllCharacters(str1);
    const objStr2 = countAllCharacters(str2);

    let keysOrdenadasObj1 = Object.entries(objStr1).sort();
    let keysOrdenadasObj2 = Object.entries(objStr2).sort();

    let isEqual = JSON.stringify(keysOrdenadasObj1) === JSON.stringify(keysOrdenadasObj2);

    if(isEqual) return true;
    else return false;
}
*/


/* FUNCION COMPARADORA SACADA DE INTERNET
function areObjEquals (obj1, obj2) {
  let equal = true;

  for (let [key, val] of Object.entries(foo)) {
    if (bar.hasOwnProperty(key))   {
      if (bar[key] !== val) {
        equal = false;
      }
    } else {
      equal = false;
    }

    if (!equal) { break; }
  }

  return equal;
}
*/
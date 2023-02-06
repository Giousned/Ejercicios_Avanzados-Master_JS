// Write your function here
function getAverageOfElementsAtProperty (obj,key){
    if (typeof obj.key==='object' && obj.key!=0){
                let suma = 0;
                let i=0;
                let contar =0;
                for (let i in obj.key){
                    suma += obj.key[i];
                    contar +=1;
                }
                average = suma/(contar); 
                return average;  
        }
    return 0;
}

let obj = {
    key: [1, 2, 3]
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2  


  /* SOLUCION DADA
  function getAverageOfElementsAtProperty(obj, key){
    if(!obj[key] || obj[key].length == 0){
        return 0;
    }

    let arr = obj[key];
    let sum = 0;

    arr.forEach((n)=>{
        sum+=n
    })

    return sum / arr.length;
}
*/
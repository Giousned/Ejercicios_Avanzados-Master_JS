// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(e=>{
        if(e < 100){
            newArr.push(e)
        }
    })

    return newArr;
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]  
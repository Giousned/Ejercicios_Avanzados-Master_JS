function getElementsAfter(array, n) {
  // your code here
  return array.slice(n+1);  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output);


/*
  let arr = [];
  return arr = array.slice(n+1,array.length);  
}
*/

/*
  let arr = [];
  return arr = array.slice(n+1);  
}
*/

/*
  let arr = [];
  return arr = array.splice(n+1,array.length);  
}
*/

/*
let arr = [];
return arr = array.splice(n+1);  
}
*/


// array = ['a', 'b', 'c', 'd', 'e']
// array.slice(n) = [ 'c', 'd', 'e']

// array.splice(n + 1) = [ 'd', 'e']
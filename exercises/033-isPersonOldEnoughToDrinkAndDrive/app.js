function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // Add your code after this line
  if(person.age >= 21){
    return true
  }

  return false
}

let obj = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output);
function isOldEnoughToDrive(age) {
  // your code here
  if (age<16) return false;
  else return true;
}

let output = isOldEnoughToDrive(22);
console.log(output);
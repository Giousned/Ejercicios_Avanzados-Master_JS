function isOldEnoughToVote(age) {
  // your code here
  if (age<18) return false;
  else return true;
}

let output = isOldEnoughToVote(22);
console.log(output);
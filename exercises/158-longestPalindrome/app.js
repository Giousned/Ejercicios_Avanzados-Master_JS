function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  let longestPalindrome = '';

  for (let i = 0; i < sentence.length; i++) {
    let word = '';
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];
      if (isPalindrome(word) && word.length > longestPalindrome.length) longestPalindrome = word
    }
  }

  return longestPalindrome
}

function reverseString(string) {
  return string.split('').reverse().join('');
}
  
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"
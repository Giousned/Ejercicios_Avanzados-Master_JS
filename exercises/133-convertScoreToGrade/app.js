function convertScoreToGrade(score) {
    // your code here
    if (0<=score && score<=59) return "F";
    else if (60<=score && score<=69) return "D";
    else if (70<=score && score<=79) return "C";
    else if (80<=score && score<=89) return "B";
    else if (90<=score && score<=100) return "A";
    else return "INVALID SCORE";
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'


/* PROBAR
let x = this.dealer;
switch (true) {
    case (x < 5):
        alert("less than five");
        break;
    case (x < 9):
        alert("between 5 and 8");
        break;
    case (x < 12):
        alert("between 9 and 11");
        break;
    default:
        alert("none");
        break;
}
*/

/* SOLUCION DADA
function convertScoreToGrade(score) {
  // your code here
  if (score > 100 || score < 0) return 'INVALID SCORE';
  else {
    if (score >= 90 && score <= 100) return 'A';
    if (score >= 80 && score <= 89) return 'B';
    if (score >= 70 && score <= 79) return 'C';
    if (score >= 60 && score <= 69) return 'D';
    if (score >= 0 && score <= 59) return 'F';
  }
}
*/
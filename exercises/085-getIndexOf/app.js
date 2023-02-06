// Write your function here
function getIndexOf(char, str) {
    // Write your function here
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
        return -1
}

let output = getIndexOf('h', 'I am a hacker');
console.log(output); // --> 7

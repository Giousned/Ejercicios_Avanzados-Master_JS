function countCharacter(str, char) {
    // your code here
    let counts=0;
    for(let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) counts +=1;
    }
    return counts;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);
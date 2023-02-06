let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    let contar=0;
    for (let key in obj){ if (obj[key]!=null) contar +=1;}
    return contar;   
}
console.log(countNumberOfKeys(obj))
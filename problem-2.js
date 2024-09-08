// function showInfo(info) {
//     const result = "My name";
// }


const person = {
    name: "cr7",
    age: 40,
    address: "portugal"
}

// Output: cr740@portugal.com

function createEmailAddress(info) {
    if(typeof info !== "object") {
        return "Invalid object";
    }
    const result = info.name+info.age+"@"+info.address+".com";
    return result;
}

console.log(createEmailAddress(person));
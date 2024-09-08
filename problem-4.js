// Count how many boolean values are in an array

const x = [30, 50, "Hello", false, 69, true, {name: "SKJ"}, true];

function countBoolean(array) {
    if(!Array.isArray(array)) {
        return "Please return valid array";
    }
    let count = 0;
    for(let item of array) {
        if(typeof item === "boolean") {
            count++;
        }
    }
    return count;
}

const result = countBoolean(x);
console.log(result);
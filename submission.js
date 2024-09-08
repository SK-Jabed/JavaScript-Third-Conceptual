function giveLargestNumbers(array) {
    let largest = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

function createEmailAddress(info) {
    if(typeof info !== "object") {
        return "Invalid object";
    }
    const result = info.name+info.age+"@"+info.address+".com";
    return result;
}

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
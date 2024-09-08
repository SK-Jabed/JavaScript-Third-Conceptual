// function syntax 
/**
 * function functionName() {
 * 
 * 
 * }
*/

function showName() {
    console.log("Yes");
}

showName();
showName();
showName();

var x = 69;
console.log(x);

showName();


function playerName(name, age, address) {
    console.log(name);
    console.log(address);
}

playerName("CR7", 40, "Portugal");


function add(x, y) {
    const total = x + y;
    console.log(total);
}

add(4,7);
add(6, 9);

function giveName() {
    const x  = "CR7";
    return x;
}

const myName = giveName();
console.log(myName);
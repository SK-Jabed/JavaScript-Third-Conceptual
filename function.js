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

// Types of functions ==> 4 types


// 1. No Parameters No Return
function show() {
    console.log("hello");
}

// 2. Parameters With No Return

function add(x, y) {
    console.log(x + y);
}

// 3. No Parameters But Return
function giveName() {
    const x = "CR7";
    return x;
}

// 4. Parameters With Return
function giveDouble(x) {
    return x;
}
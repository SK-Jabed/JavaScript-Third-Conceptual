// Find out the largest number from an array

const numbers = [32, 23, 45, 56, 69, 15, 53, 27];

console.log(Math.max(...numbers));

let largest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is:", largest);


const age = [22, 16, 18, 25, 32];

function giveLargestNumbers(array) {
    let largest = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

const result = giveLargestNumbers(age);
console.log("Largest age is:", result);




const person1 = {
    name: "SKJ", 
    honors: 40,
    HSC: 30, 
    isFFfamily: true
}

const person2 = {
    name: "MHM", 
    honors: 45,
    HSC: 32, 
    isFFfamily: false
}

function jobSelection(info) {
    if(typeof info !== "object") {
        return "Invalid object";
    }

    let totalMarks = info.honors + info.HSC;
    if(info.isFFfamily) {
        totalMarks = totalMarks + (totalMarks * 0.2);
    }
    if(totalMarks >= 80) {
        return "You get the job";
    }
    else {
        return "You failed";
    }
}

console.log(jobSelection(person2));
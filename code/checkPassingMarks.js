let marks = 80;

function checkPass(marks) {
    if(marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let result = checkPass(80);

console.log(result);

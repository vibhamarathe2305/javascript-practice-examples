let marks = {
    maths: 88,
    science: 92,
    english: 76,
    history: 84,
    computer: 95
};
let sum = 0;

for ( let key in marks) {
    sum += marks[key];
}

console.log(sum);

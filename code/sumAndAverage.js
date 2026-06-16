let students = [
  { name: "Aarav", marks: 88 },
  { name: "Meera", marks: 95 },
  { name: "Dev", marks: 63 },
  { name: "Tanya", marks: 78 },
  { name: "Arjun", marks: 84 },
  { name: "Sneha", marks: 91}
];

let sum = 0;

for (let i = 0; i <= students.length; i++) {
    //clnst element = array[index];
    console.log(i);
    sum = sum + i
}   
console.log(sum);

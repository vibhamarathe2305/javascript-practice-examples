let employees = [
  { name: "Rahul", salary: 60000 },
  { name: "Amit", salary: 45000 },
  { name: "Neha", salary: 70000 }
];

let sum = employees.reduce((accumulator, employees) => {
    return accumulator + employees.salary;
}, 0)

console.log(sum);

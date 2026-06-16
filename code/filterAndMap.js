let employees = [
  { name: "Rahul", salary: 60000 },
  { name: "Amit", salary: 45000 },
  { name: "Neha", salary: 70000 },
  { name: "Priya", salary: 40000 }
];

highSalaryEmployees = employees.filter(employees => employees.salary > 50000).map(employees => employees.name);

console.log(highSalaryEmployees);

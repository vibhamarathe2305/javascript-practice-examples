let employees = [
    { name: "Amit", dept: "Engineering", salary: 75000 },
    { name: "Priya", dept: "Design", salary: 68000 },
    { name: "Rohan", dept: "Engineering", salary: 82000 },
    { name: "Sneha", dept: "HR", salary: 60000 },
    { name: "Kiran", dept: "Design", salary: 71000 },
    { name: "Rahul", dept: "Engineering", salary: 91000 }
];

for (i = 0; i < employees.length; i++) {
    if (employees[i].salary >= 70000)
    console.log(employees[i]);
    
}
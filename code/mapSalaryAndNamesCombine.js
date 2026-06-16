let employees = [
  { name: "Rahul", salary: 60000 },
  { name: "Amit", salary: 45000 },
  { name: "Neha", salary: 70000 }
];

allTeamMember = employees.map(employees => `${employees.name}- ${employees.salary}`)

console.log(allTeamMember);

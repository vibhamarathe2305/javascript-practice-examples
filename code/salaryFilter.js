let company = [
  {
    dept: "Engineering",
    teams: [
      {
        teamName: "Backend",
        employees: [
          { name: "Rahul", salary: 60000 },
          { name: "Amit", salary: 45000 },
        ],
      },
      {
        teamName: "Frontend",
        employees: [{ name: "Neha", salary: 70000 }],
      },
    ],
  },
  {
    dept: "HR",
    teams: [
      {
        teamName: "Recruitment",
        employees: [
          { name: "Priya", salary: 52000 },
          { name: "Sonal", salary: 40000 },
        ],
      },
    ],
  },
];

//console.log(company[0].teams);
//console.log(company[0].teams[0]);
for (i = 0; i < company.length; i++) {
    console.log(company[i]);
    for(j = 0; j < company[i].teams.length; j++) {
        console.log(company[i].teams[j]);

        for (let k = 0; k < company[i].teams[j].employees.length; k++) {
           // const element = array[k];
           console.log(company[i].teams[j].employees[k]);
        let company[i].teams[j].employees[k] = employee
           if (employee.Salary <= 50000) {
            console.log(employee);
            
           } 
            
        }
        
    }
    
}

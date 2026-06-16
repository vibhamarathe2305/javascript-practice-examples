let company = [
  {
    dept: "Engineering",
    teams: [
      {
        teamName: "Backend",
        employees: ["Rahul", "Amit"]
      },
      {
        teamName: "Frontend",
        employees: ["Neha"]
      }
    ]
  },
  {
    dept: "HR",
    teams: [
      {
        teamName: "Recruitment",
        employees: ["Priya", "Sonal"]
      }
    ]
  }
]
for (let i = 0; i < company.length; i++) {
    //const element = array[i];
    console.log( company[i].dept);
    //let company[i].dept = departmentName,
    for (let j = 0; j < company[i].teams.length; j++) {
        //const element = array[j];
        console.log("teamName:",company[i].teams[j].teamName);

        for(k = 0; k < company[i].teams.length; k++)
        console.log("employees:", company[i].teams[j].employees[k]);
        
    }
    
}
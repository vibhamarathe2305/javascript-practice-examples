let school = [
  { class: "A", students: ["Rahul", "Amit"] },
  { class: "B", students: ["Neha", "Priya"] }
];

for(i = 0; i < school.length; i++) {
   // console.log(school.length);
    
  for (let j = 0; j < school[i].students.length; j++) {
    
   console.log(school[i].students[j]);
   
    
    
  }
  //console.log(school[i].students[j]);
}
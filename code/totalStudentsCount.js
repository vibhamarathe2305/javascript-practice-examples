let school = [
  { class: "A", students: ["Rahul", "Amit"] },
  { class: "B", students: ["Neha", "Priya"] }
];

let count = 0;

for (i = 0; i < school.length; i++) {
    //console.log(i);
    
    for (j = 0; j < school[i].students.length; j++){
        if (school[i].students[j] ) {
            console.log("total number of student is", school[i].students[j]);
            count++
        }
        
    }
}
console.log("total number of students is", count);

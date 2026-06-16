let school = [
  { class: "A", students: ["Rahul", "Amit"] },
  { class: "B", students: ["Neha", "Priya"] }
];

for (i = 0; i < school.length; i++) {

    for(j = 0; j < school[i].students.length; j++){
    if (school[i].class === "B") {
        console.log(school[i].students[j]);
        
    }
}
}
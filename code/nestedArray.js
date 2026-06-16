let students = [
  {
    name: "Aarav",
    scores: [
      { subject: "Maths", marks: 88 },
      { subject: "Science", marks: 92 },
      { subject: "English", marks: 76 },
      { subject: "History", marks: 84 },
    ],
  },
  {
    name: "Vibha",
    scores: [
      { subject: "Maths", marks: 95 },
      { subject: "Science", marks: 89 },
      { subject: "English", marks: 91 },
      { subject: "History", marks: 78 },
    ],
  },
  {
    name: "Dev",
    scores: [
      { subject: "Maths", marks: 70 },
      { subject: "Science", marks: 65 },
      { subject: "English", marks: 80 },
      { subject: "History", marks: 74 },
    ],
  },
];

totalNoStudent = students.length



for(let i = 0; i < totalNoStudent; i++) {
    let studentName = students[i].name
    let totalSubject =  students[i].scores.length

    let sum = 0;
    let average = 0;

    
    
    for(let j = 0; j < totalSubject; j++){
        let scoreByStudent = students[i].scores[j]
        let studentMark = scoreByStudent.marks
        sum += studentMark
    }
    console.log(studentName);
    avgIs = sum/totalSubject
    console.log(sum);
    console.log(avgIs);     
    console.log("---");
    
}


// console.log(students[0]);
// console.log("---");
// console.log(students[0].name);
// console.log("---");
// console.log(students[0].scores[0].marks);

// console.log("---");
// console.log(students[1].scores[2].marks);

// // <name> got <mark
// // s> marks in <subject>
// console.log(`${students[1].name} got ${students[1].scores[2].marks} marks in ${students[1].scores[2].subject} `);


let student = {
    name: "Rahul",
    age: 21,
    city: "Pune",
    course: "Engineering",
    cgpa: 8.5
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
    
}
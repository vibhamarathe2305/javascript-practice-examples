let personlInfo = {
    name: "Tushar",
    age: 26,
    city: "Pune"
};

let professionalInfo = {
    role: "Devops Engineer",
    company: "LogicMonitor",
    experience: 4
};

let combinedInfo = {};

for (let key in personlInfo) {
    combinedInfo[key] = personlInfo[key]
}
for (let key in professionalInfo) {
    combinedInfo[key] = professionalInfo[key]
}

console.log(combinedInfo);

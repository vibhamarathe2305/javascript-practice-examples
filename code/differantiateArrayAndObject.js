let laptop = {
    brand: "Dell",
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    price: 75000
};

let keysArray = []
let valuesArray = []

for (let key in laptop) {
    keysArray = Object.keys(laptop)
    valuesArray = Object.values(laptop)
}


console.log(keysArray);

console.log(valuesArray);

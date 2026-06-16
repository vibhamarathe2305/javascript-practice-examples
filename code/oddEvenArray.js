let numbers = [11, 4, 7, 2, 19, 6, 13, 8, 5, 20];
let evenNumbers = [];
let oddNumbers = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i])
  }else{
    oddNumbers.push(numbers[i])
  }
}
//evenNumbers.push(4, 2, 6, 8, 20);
console.log(evenNumbers);

//oddNumbers.push(11, 7, 19, 13, 5);
console.log(oddNumbers);

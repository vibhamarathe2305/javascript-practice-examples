let numbers = [10, 20, 30 ,40]
targetNumber = 30

for (i=0; i < numbers.length; i++) {
  if ( numbers[i] === targetNumber) {
    console.log('number is found', numbers[i])
    break;
  }
}

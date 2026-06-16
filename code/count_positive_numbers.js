// give me total count of -ve number
let numbers = [2, -1, 5, -3, 7, 0];
let count = 0
let negativeCount = 0

for (i = 0; i < numbers.length; i++) {
  console.log(i);

  if (numbers[i] > 0){

      console.log(numbers[i], "is positive");
      count++
      
    }
  else if (numbers[i] < 0) {
     console.log(numbers[i], "is negative");
      negativeCount++
      
  }
  else {
    console.log(numbers[i], "is zero");
    
  }

  }
        console.log("count of positive number is",count);
        console.log("count of negative number is", negativeCount);
        console.log("count of array is", numbers.length)




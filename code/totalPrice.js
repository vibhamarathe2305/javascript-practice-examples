let numbers = [10, 20, 50, 50, 94]

let sum = numbers.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue
})

console.log(sum);

let prices = [100, 200, 300]
let sum = 0
for (i = 0; i < prices.length; i++) {
   sum = 0
    console.log(i);
    console.log("price of", prices[i]);
    sum += prices[i]
    
}
console.log("total price of item in cart is", sum);
console.log("total length of array is", prices.length);

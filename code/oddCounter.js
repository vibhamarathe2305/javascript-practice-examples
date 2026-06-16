let n = 15;
let count = 0;

for (i = 0; i <= n; i++) {
    //console.log("value of i is", i);
    reminder = i%2
    count++
    if (reminder != 0) {
        console.log(i,"is a odd number");
        count++;
        
    }
}
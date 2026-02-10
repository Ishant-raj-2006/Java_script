// WAP to find Whether a given number is Divisible by either 2 or 3.
const prompt = require("prompt-sync")();
let num = prompt("Enter Number = ")
if(num%2==0 || num %3==0){
    console.log("Your number is divisible by 2 or 3 = "+num)
}
else{
    console.log("Your number is Not divisible by 2 or 3 = "+num)
}
// WAP to find  Whether a number is divisible by 2 and 3.
 const prompt = require("prompt-sync")();
let num = prompt("Enter Number = ")
if(num%2==0 && num%3==0){
    console.log("Yes it is divisible by 2 and 3 both = "+num)
}
else{
    console.log("No it is Not divisible by 2 and 3 both = "+num)
}
// WAP for print "You can drive" or "You cannot drive" based on age being greater then 18 usig.
const prompt = require("prompt-sync")();
let age  = prompt("Enter your age = ")
if(age>=18){
    console.log("Yes you can drive ")
}
else{
    console.log("No you can't drive becouse youre age = "+age)
}

// Lecture 8 complite of 103
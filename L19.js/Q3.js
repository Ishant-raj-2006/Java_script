//  WAP for take name input form user and convert it's in Array by using Array.from.
const prompt =require("prompt-sync")();
let name
console.log("Enter your name = ")
name = prompt()
let arr = Array.from(name)
console.log(arr)
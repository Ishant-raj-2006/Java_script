// Create an array of number and take Input from user to add a numbers To this array.
const prompt =require("prompt-sync")();
let arr = [10,20,30,40,50]
let num = prompt("Enter number ")
num = Number.parseInt(num)
arr.push(num)
console.log(arr)
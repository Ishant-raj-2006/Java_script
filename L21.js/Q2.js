// Keep adding number to the array In one Until 0  Is added to the array
const prompt = require("prompt-sync")();
let arr = [10,20,30,40,50]
let num
do{
    num = prompt("Enter Number = ")
    num = Number.parseInt(num)
    arr.push(num)
}while(num!=0){
    console.log(arr)
}
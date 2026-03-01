// WAP for number gassing game.
const prompt = require("prompt-sync")();
let ran = Math.floor(Math.random()*100);
let num,count=0;
let startTime = Date.now();
do{
num = Number(prompt("Enter number ="))
if(ran==num){
    console.log("Done Congratulation")
}else if(ran<num){
    console.log(" Please enter number Less than =")
}
else if(ran>num){
    console.log(" Please enter number Greater than =")
}
count++
}while(ran!=num)
console.log("Your Score is :"+(100-count))
let endTime = Date.now();
let totalTime = (endTime - startTime) / 1000;
console.log("⏱ Time taken = " + totalTime + " seconds");
// Huge Java script to create Game of snake water and gun The game solved we ask you To create Snake water Gun the computer should be Ultra 2 Randomly generated A snack water or gun And declare win or lose Using alert Hu Configuration And prompt Wherer required
// const prompt = require("prompt-sync")();
// let num = Math.floor(Math.random()*3)+1
// console.log(num)
// let tm = prompt("Aap kitna time lena chahte h ")
// for(let i=1; i<=tm; i++){
//     let use = prompt("Enter S (Snake) , W (Water) or G (Gun) = ")
// use = use.toUpperCase()
// if(num==1 && use=="S"){
// console.log("You Win")
// break
// }
// else if(num==2 && use== "W"){
//     console.log("You Win")
//     break
// }
// else if(num==3 && use== "G"){
//     console.log("You Win")
//     break
// }
// }


const prompt = require("prompt-sync")();
let num = Math.floor(Math.random() * 3) + 1;
console.log("=== 🐍 Snake 💧 Water 🔫 Gun Game ===");

let rounds = Number(prompt("Kitne rounds khelna chahte ho? = "));
console.log(num)

let userScore = 0;
let compScore = 0;

for (let i = 1; i <= rounds; i++) {

    console.log("\nRound " + i);

    // Computer random choice har round me
    

    let comp;
    if (num === 1) comp = "S";
    else if (num === 2) comp = "W";
    else comp = "G";

    let user = prompt("Enter S (Snake), W (Water), G (Gun) = ");
    user = user.toUpperCase();

    console.log("Computer chose: " + comp);

    if (user === comp) {
        console.log("Match Draw 🤝");
        
    }
    else if (
        (user === "S" && comp === "W") ||
        (user === "W" && comp === "G") ||
        (user === "G" && comp === "S")
    ) {
        console.log("You Win 🎉");
     
        userScore++;
    }
    else if (user === "S" || user === "W" || user === "G") {
        console.log("You Lose 😢");
        
        compScore++;
    }
    else {
        console.log("Invalid Input ❌");
       
    }
}

console.log("\n=== Final Score ===");
console.log("Your Score: " + userScore);
console.log("Computer Score: " + compScore);

if (userScore > compScore) {
    console.log("🏆 Congratulations! You are the Final Winner!");
}
else if (compScore > userScore) {
    console.log("💻 Computer Wins the Game!");
}
else {
    console.log("🤝 Overall Match Draw!");
}
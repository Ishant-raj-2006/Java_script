// In in question one Huge confirmed to ask the user if he want to see the prompt again
const canDrive = (age)=>{
   return age>=18?true:false
let runAgain = true
while(runAgain){
    let age = prompt("Enter number = ")
age = Number.parseInt(age)

}
if(canDrive(age)){
    alert("Yes you can drive ")
}
else{
    alert("No you can note drive")
}
runAgain = confirm("Do you want to play again ? ")
}
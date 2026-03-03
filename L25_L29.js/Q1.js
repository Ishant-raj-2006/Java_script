// Write a programme using protef function To take input of edge As a value From the user and use alert to tell him if he can drive
let age = prompt("Enter number = ")
age = Number.parseInt(age)
const canDrive = (age)=>{
   return age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can drive ")
}
else{
    alert("No you can note drive")
}
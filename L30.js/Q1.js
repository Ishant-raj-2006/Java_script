const changeBgRed = ()=>{
   document.body.firstElementChild.style.background = "pink";
}
let b = document.body
changeBgRed();   
console.log("Hello")
console.log("First Child of b is : " , b.firstChild)
console.log("First Child of b is : " , b.firstElementChild)


// const changeBgRed = ()=>{
//     document.body.firstElementChild.style.background = "red";
// }

// changeBgRed();   // function call

// let b = document.body
// console.log("First Child of b is : ", b.firstChild)
// console.log("First Element Child of b is : ", b.firstElementChild)
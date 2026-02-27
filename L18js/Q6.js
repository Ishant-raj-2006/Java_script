// WAP add element in array by using Splice and return its deleted values .

let arr = [1,3,2,5,7,88567,456,475]
let deletedValues = arr.splice(0,4,83,17,73,58)
console.log("In this array we see added new element "+arr)

 // yaha pe 0 index number h ki kaha se element add hona start hoga 
// yaha pe 4 uss index ke baad kitne element add krna h ,ab element likhenge jo add krna h 
console.log("This is your deleted values = "+deletedValues)


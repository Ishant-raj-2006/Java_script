// Huge reduced to calculate factorial of a given number From an array of first n natural numbers.
let arr =[10,20,22,30,22,123,314,4,40]
let n = arr.reduce((X1,X2)=>{
    return X1*X2
})
console.log(n)
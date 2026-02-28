// WAP for find the sum of all element of array by using reduce methode.
let arr =[112,214,21,213,54,543,23]
let s = arr.reduce((s1,s2)=>{
    return s1+s2
})
console.log(s)
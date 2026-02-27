// WAP for Reversh array by using Reversh method .
let compare = (a,b)=>{
    return a-b
}
let arr = [20,2,24,4534,465,684,2342,5667];
arr.sort(compare)
console.log("Without reversh = "+arr)
arr.reverse()
console.log("After reversh = "+arr)
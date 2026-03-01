// Philtre for numbers divisible by 10 from a Given array .
let arr =[10,20,22,30,22,123,314,4,40]
let new_arr = arr.filter((Div)=>{
    return Div %10==0
})
console.log(new_arr)
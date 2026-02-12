// Extract the amount out of this string "please give me Rs 1000".
let str = "Please give me Rs 1000"
let amount = str.slice("Please give me Rs".length)
console.log(amount)
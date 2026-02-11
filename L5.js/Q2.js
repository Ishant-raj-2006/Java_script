// WAP to print the marks of a student in an object using for in loop.
let marks = {
    Badal : 90,
    Ishant :9,
    raj : 80,
    monika :100
}
for(let  key in marks){
    console.log("The marks of "+ key + " are "+marks[key])
}
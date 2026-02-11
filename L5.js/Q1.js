// WAP to print the marks of a student in an object using for loop.
let marks = {
    Badal : 90,
    Ishant :9,
    raj : 80,
    monika :100
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are " + marks[Object.keys(marks)[i]]);
}
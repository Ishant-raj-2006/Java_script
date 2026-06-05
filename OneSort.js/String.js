// WAP for print your name by using a variable.
let a = "Ishant";
console.log(a);
 
console.log("------------------------------------------------------------------");

 
// WAP for print your name and it's length .
console.log(a, a.length);

console.log("------------------------------------------------------------------");


// WAP for print your name by using for loop .
for(let i=0; i<a.length; i++){
    console.log(a[i]);
}

console.log("------------------------------------------------------------------");
// WAP for print your name by using for of loop.
for(const char of a){
    console.log(char);
}

console.log("------------------------------------------------------------------");

// WAP for convet all letters in capital latter .
console.log(a.toUpperCase ())

console.log("------------------------------------------------------------------");

// WAP for convert all letters in small latters.
console.log(a.toLowerCase())

console.log("------------------------------------------------------------------");

// WAP for remove unwanted space in any strinng .
let b =       "                 Hello   Ishant            ";
console.log(b.length);
tri = b.trim();
console.log(tri);
console.log(tri.length);


console.log("------------------------------------------------------------------");

// WAP for find the index number of o in b after trime .
console.log(b.indexOf('o'));

// WAP for find the sub string between index number 5 to 28 in b.
console.log("------------------------------------------------------------------");
console.log(b.slice(5,28));


// WAP for print somthing in Array just like "Hello Ishant who are you ".

console.log("------------------------------------------------------------------");
let name = "Hello Ishant who are you";
console.log(name);
console.log("------------------------------------------------------------------");

let arr = name.split(' ');
for(const ele of arr){
    console.log(ele);
}
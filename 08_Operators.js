// Operators 

/*
There are following types of operators in JavaScript:
    Arithmetic Operators
    Comparison (Relational) Operators
    Bitwise Operators
    Logical Operators
    Assignment Operators
    Special Operators
*/


//---------------------------------------------------------------------------

// 1. Arithmetic Operators
var a = 3;
var b = 5;

console.log(a + b); // 8
console.log(a - b); // -2
console.log(a * b); // 15
console.log(a / b); // 0.6
console.log(a % b); // 3 [3 % 5]
console.log(b % a); // 2 [5 % 3]

//Increment, Decrement Operators:
console.log(a++); // 3 (now 'a' become 4)
console.log(++b); // 6 (now 'b' become 6)
console.log(a--); // 4 ('a' was 4)
console.log(--b); // 5 ('b' was 6)


// 2. Comparison (Relational) Operators

var x = 4; // int
var y = 5; // int
var z = 4; // int
var w = '4'; // char

console.log(x == y);   //false
console.log(x == z);   // true
console.log(x != y);   // true
console.log(x < y);    // true
console.log(x > y);    //false
console.log(x <= z);   // true
console.log(x >= z);   // true
console.log(x === z);  // true
console.log(x == w);   // true
console.log(x === w);  //false
console.log(x !== w);  // true


// 3. Bitwise Operators:



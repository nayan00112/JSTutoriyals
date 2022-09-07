// Array Destructuring 

let num = [1, 2, 3];

console.log(num);  // [ 1, 2, 3 ]

let [a, b, c] = num;

console.log(a);  // 1
console.log(c);  // 3




let x = 4;
let y = 2;

[x, y] = [y, x]; // 4,2 values assign to LHS variables.

console.log(x, y); // 2 4


let words = "My name is Nayan.".split(' '); // split by space.
console.log(words);
// [ 'My', 'name', 'is', 'Nayan.' ]

console.log(words[3]); // Nayan.




let w = [1, 3, 5, 7]

let [p, q, , s] = w;

console.log(p, q, s); // 1 3 7 (Skip 5)


let sentence = "Hello Mansh How are you?".split(' ');
let [h, i, ...j] = sentence;

console.log(h);  // Hello
console.log(i);  // Mansh
console.log(j);  // [ 'How', 'are', 'you?' ]

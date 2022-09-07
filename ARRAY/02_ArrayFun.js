let arr = [3, 5, 6, 7, 8, 9];

console.log(arr);
// [ 3, 5, 6, 7, 8, 9 ]

arr.pop();
console.log(arr);
// [ 3, 5, 6, 7, 8 ]

arr.push(1);
console.log(arr);
// [ 3, 5, 6, 7, 8, 1 ]

arr.shift();
console.log(arr);
// [ 5, 6, 7, 8, 1 ]

arr.unshift(2);
console.log(arr);
// [ 2, 5, 6, 7, 8, 1 ]

console.log(arr.pop()); // 1
console.log(arr);
// [ 2, 5, 6, 7, 8 ]


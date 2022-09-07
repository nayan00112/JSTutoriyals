let words = [23, 45, 78, 84, 98];
words.forEach((n) => {
    console.log(n);
});
// Output:
// 23
// 45
// 78
// 84
// 98

words.forEach((n) => {
    console.log(n * 4);
});

// Output:
// 92
// 180
// 312
// 336
// 392


words.forEach(n => { // This is also work (without ()).
    console.log(n * 4);
});




words.forEach((n, i, nums) => { // n = value; i = index; nums = our Array.
    console.log(n, i, nums);
});

// Output:
// 23 0 [ 23, 45, 78, 84, 98 ]
// 45 1 [ 23, 45, 78, 84, 98 ]
// 78 2 [ 23, 45, 78, 84, 98 ]
// 84 3 [ 23, 45, 78, 84, 98 ]
// 98 4 [ 23, 45, 78, 84, 98 ]
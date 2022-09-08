let nums = [44, 32, 55, 45, 53, 56, 57, 31, 10, 10, 3, 4]

console.log(nums.filter(n => n % 2 == 0));
// [ 44, 32, 56, 10, 10, 4 ]

// forEach
nums.filter(n => n % 2 == 0).forEach(element => {
    console.log(element);
});

/*
44
32
56
10
10
4
*/

// map
nums.filter(n => n % 2 == 0).map(n => n * 2).forEach(element => {
    console.log(element);
});

/*
88
64
112
20
20
8
*/


nums = [1, 2, 3, 4, 5, 6]
// reduce
let result = nums.filter(n => n % 2 == 0).map(n => n * 2).reduce((a, b) => a + b);
console.log(result); // 24
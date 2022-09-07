let nums = [];

nums[0] = 1;

nums[12] = 4;

for (let key in nums) {
    console.log(key);
}

/*
Output:
0
12
*/

for (let key of nums) {
    console.log(key);
}
/*
Output:
1
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
4
*/
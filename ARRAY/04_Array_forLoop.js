let nums = [];

nums[0] = 16;

nums[12] = 84;

for (let key in nums) { 
    console.log(key);
}
// We get key (index).
/*
Output:
0
12
*/
// for value: 

for (let key in nums) { 
    console.log(nums[key]);
}
/*
Output:
16
84
*/

for (let key of nums) {
    console.log(key);
}
/*
Output:
16
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
84
*/
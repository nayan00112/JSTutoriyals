let nums = new Set();

nums.add(8);
nums.add(5);
nums.add(7);
nums.add(7);
nums.add(9);
nums.add("Nayan");
nums.add("Patel");



console.log(nums);
// Set(6) { 8, 5, 7, 9, 'Nayan', 'Patel' }

nums.forEach(n=>{
    console.log(n);
})
/*
8
5
7
9
Nayan
Patel
*/

console.log(nums.has(7)); // true
console.log(nums.has("Nayan")); // true
console.log(nums.has("nayan")); // false
console.log(nums.has(75)); // false

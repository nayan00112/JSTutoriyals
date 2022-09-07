// Array (Array is Object in javascript.)

user = ['Nayan', 'Patel', "Ashokbhai"];
console.log(user[0]); // Nayan
// Worked but not recommanded. It is js old facility. 
// Recommanded method given below.

let user1 = ['Nayan', 'Patel', "Ashokbhai"];
console.log(user1[0]); // Nayan
console.log(user1[5]); // undefined

var user2 = ['Nayan', 'Patel', "Ashokbhai"];
console.log(user2[0]); // Nayan


var arr = ["Name", { name: "Nayan", sername: "Patel" }, function () { console.log("Hello Nayan"); }, 101];
// Array can take any type of data.
console.log(arr);
/*
[
  'Name',
  { name: 'Nayan', sername: 'Patel' },
  [Function (anonymous)],
  101
]
*/


arr[2]();    // Hello Nayan
console.log(arr[1].name);    // Nayan

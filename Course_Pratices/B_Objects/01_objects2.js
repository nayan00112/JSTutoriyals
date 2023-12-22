// Creating objects in javascrpt 
// Three way to creating objects
// 1. By object literal
// 2. By creating instance of object directly (using new keyword)
// 3. By using an object constructor (using new keyword)

// 1. By object literal
var a = {id:"123", name: "Nayan", email: "nayan_test_123@gmail.com"}
console.log(a);
console.log(a.email);

for(let i in a){
    console.log(i);
    console.log(a[i]);
    console.log();
}

console.log("--------------------------------------------------");

// 2. By creating instance of object directly (using new keyword)
var b = new Object(); // Object() is inbuilt 
b.id = 23;
b.name = "Marmik"

console.log(b);
console.log(b.name);
/*
In JavaScript, `Object` is a built-in constructor function. It's one of the fundamental data types and acts as a blueprint for creating JavaScript objects.

When you use `new Object()`, you're essentially creating a new instance of the `Object` constructor function, which creates an empty object.

For instance:

```
var b = new Object();
```

This line creates a new empty object `b` using the `Object` constructor. This `b` object doesn't have any properties or methods initially, but you can dynamically add properties and methods to it as needed:

```
b.property = 'someValue';
b.method = function() {
    // do something
};
```

This object creation method is one way to create objects in JavaScript, but there are other ways like object literals `{}`, factory functions, and ES6 classes (`class` syntax), each with its own advantages and use cases.
*/

console.log("--------------------------------------------------");

// 3. By using an object constructor (using new keyword)

function student(rollnum, name, email){
    this.rollnum = rollnum;
    this.name= name;
    this.email = email;
}

s1 = new student(1, "Jignesh", "jig1test@gmail.com")

console.log(s1);
console.log(s1.name);

console.log("--------------------------------------------------");

function emp(id, name, salary){
    this.name = name;
    this.id = id;
    function bonusSalary(salary){
        return salary + 0.1 * salary
    }
    this.salary = bonusSalary(salary)
}

e1 = new emp(1, "Jignesh", 1000)
console.log(e1);
// Output:
// { id: '123', name: 'Nayan', email: 'nayan_test_123@gmail.com' }
// nayan_test_123@gmail.com
// id
// 123

// name
// Nayan

// email
// nayan_test_123@gmail.com

// --------------------------------------------------
// { id: 23, name: 'Marmik' }
// Marmik
// --------------------------------------------------
// student { rollnum: 1, name: 'Jignesh', email: 'jig1test@gmail.com' }
// Jignesh
// --------------------------------------------------
// emp { name: 'Jignesh', id: 1, salary: 1100 }
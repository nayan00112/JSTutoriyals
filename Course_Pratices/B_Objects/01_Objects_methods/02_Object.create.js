// Object.create()
// `Object.create()` is a method in JavaScript used to create a new object, using an existing object as the prototype of the newly created object.

// Here's an example:

// ```javascript
// // Creating an object that will serve as the prototype
// const carPrototype = {
//     startEngine() {
//         return 'Engine started!';
//     },
//     stopEngine() {
//         return 'Engine stopped!';
//     }
// };

// // Creating a new object using carPrototype as its prototype
// const myCar = Object.create(carPrototype);

// // Accessing methods from the prototype
// console.log(myCar.startEngine()); // Output: 'Engine started!'
// console.log(myCar.stopEngine());  // Output: 'Engine stopped!'
// ```

// In this example:

// - `carPrototype` is an object with methods related to a car's engine.
// - `Object.create(carPrototype)` creates a new object `myCar` where `carPrototype` is the prototype of `myCar`. This means `myCar` inherits properties and methods from `carPrototype`.
// - `myCar` can access the methods `startEngine()` and `stopEngine()` even though these methods are not directly defined within `myCar`. They are accessed via inheritance from the `carPrototype`.

// `Object.create()` allows you to create objects with specific prototypes, enabling prototypal inheritance in JavaScript. It's particularly useful when you want to create objects that inherit properties and methods from a shared prototype object while keeping each object separate.

const tcp = {
    connectionEstablishment(){
        return "Connection Established";
    },
    connectionTerminate(){
        return "Connection Terminate";
    }
}

const obj = Object.create(tcp)
console.log(obj.connectionEstablishment())
console.log(obj.connectionTerminate())

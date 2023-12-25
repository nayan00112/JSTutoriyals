const a = 1
console.log(a)

let b = "234casdc"
console.log(b)

var name = "Nayan"
console.log(name)



// globle Variable, local variable

var globleVar = 4;

function fun(){
    var localVar = 5;
    console.log(globleVar);
    console.log(localVar);
}

fun()

/*
In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some differences in terms of scope, reassignment, and mutability:

1. **`var`:**
   - Declares a variable globally, or locally to an entire function, regardless of block scope.
   - Variables declared with `var` have function scope or global scope.
   - They can be re-declared and updated throughout the code.
   - `var` variables are hoisted (moved to the top of their scope during compilation), which means they can be accessed before they're declared.
   - Example:
     ```javascript
     var x = 10;
     function example() {
         var y = 20;
         if (true) {
             var z = 30;
             console.log(y); // Accessible
         }
         console.log(z); // Accessible
     }
     ```

2. **`let`:**
   - Introduces block-scoped variables. They are only accessible within the block they are declared in (if, for, while blocks, etc.).
   - Variables declared with `let` can be reassigned a new value but cannot be re-declared within the same scope.
   - They are not hoisted; attempting to access them before their declaration will result in a ReferenceError.
   - Example:
     ```javascript
     let a = 10;
     if (true) {
         let b = 20;
         console.log(a); // Accessible
     }
     console.log(b); // Error: b is not defined
     ```

3. **`const`:**
   - Declares a constant variable that cannot be reassigned a new value once it's initialized.
   - `const` also has block scope like `let`.
   - The value assigned to a `const` must be initialized during declaration.
   - Objects and arrays declared with `const` can have their properties or elements modified, but the variable itself cannot be reassigned.
   - Example:
     ```javascript
     const PI = 3.14;
     // PI = 3.1415; // Error: Assignment to constant variable
     const arr = [1, 2, 3];
     arr.push(4); // Valid - Modifying the array
     // arr = [1, 2, 3, 4]; // Error: Assignment to constant variable
     ```

Generally, it's recommended to use `const` by default and only use `let` when you know the variable's value needs to change. This helps in writing more predictable and maintainable code by reducing unexpected changes or mutations.
*/
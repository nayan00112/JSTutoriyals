const obj1 = {
    a : 4,
    b : 5,
    c : 6
}

console.log(obj1);

const obj2 = Object.assign(obj1, {a:1, b:9, c:8})
const obj3 = Object.assign(obj1, {a:90})
console.log(obj2);
console.log(obj3);

// output:
// { a: 4, b: 5, c: 6 }
// { a: 90, b: 9, c: 8 }
// { a: 90, b: 9, c: 8 }

// where is the a: 1 ? for obj2


/*
`Object.assign()` is a method in JavaScript used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Here's an example:

```
// Creating a target object
var target = { a: 1, b: 2 };

// Creating a source object
var source = { b: 4, c: 5 };

// Using Object.assign() to copy properties from source to target
Object.assign(target, source);

// Displaying the modified target object
console.log(target); // Output: { a: 1, b: 4, c: 5 }
```

In this example:

- `target` is the object to which properties will be copied.
- `source` is the object containing properties to be copied to the `target` object.
- `Object.assign(target, source)` copies all enumerable own properties from `source` to `target`.
- The `b` property in `target` is overridden by the `b` property in `source`, and the `c` property from `source` is added to `target`.

`Object.assign()` is often used to merge objects, create a shallow copy of an object, or update an object with new properties. It's important to note that `Object.assign()` performs a shallow copy, meaning it only copies object references. If the source object contains nested objects, they won't be deeply cloned; their references will be copied instead.
*/
In JavaScript, hoisting is a mechanism where function and variable declarations are moved to the top of their containing scope during the compilation phase. This allows you to use functions and variables before they are actually declared in the code. However, it's important to note that hoisting works differently for function declarations and class declarations.

When it comes to function declarations, they are fully hoisted, meaning you can invoke a function before declaring it in the code, and it will still work. For example:

```javascript
foo(); // This works because of hoisting

function foo() {
  console.log('Hello!');
}
```

However, class declarations are not hoisted in the same way. If you try to invoke a class before declaring it, you will encounter a `ReferenceError`. For example:

```javascript
const obj = new MyClass(); // ReferenceError: MyClass is not defined

class MyClass {
  constructor() {
    console.log('An instance of MyClass created.');
  }
}
```

To avoid this error, you need to ensure that the class is declared before attempting to use it, just like any other variable in JavaScript. This means you should define the class before invoking it or creating instances of it.

So, the statement you mentioned is highlighting the difference between function and class declarations regarding hoisting. While function declarations can be invoked before their declaration, class declarations cannot, and it's necessary to declare the class before using it.
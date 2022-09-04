console.log(this);
//output: {}
//different output in browser.

//----------------------------------------

var user = {
    name: "Nayan",
    serName: "Patel",
    courseCount: 4,
    getCourseCount : function (){
        console.log("LINE12", this);
    }, 
}

user.getCourseCount();
// output:
/*
LINE12 {
  name: 'Nayan',
  serName: 'Patel',
  courseCount: 4,
  getCourseCount: [Function: getCourseCount]
}
*/

// For all regular function calls, this point to window object.





//different output in browser.
var user = {
    name: "Nayan",
    serName: "Patel",
    courseCount: 4,
    getCourseCount : function (){
        console.log("LINE12", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE15", this)
        }
        sayHello();
    }, 
}

// output
/*
LINE12 {
  name: 'Nayan',
  serName: 'Patel',
  courseCount: 4,
  getCourseCount: [Function: getCourseCount]
}
Hello
LINE15 <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
}
*/
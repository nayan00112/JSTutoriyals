// IIFE = immediately Incoked Function Expression (Self-Executing Anonymus Function)
// recommand to read MDN refrance:

(function () {
    console.log("Hello Function");
})();
// Output:
// Hello Function
console.log("___________________________________________");

(function(name){
    console.log(`Hello ${name}`);
})("Nayan Patel");

console.log("___________________________________________");
// Output:
// Hello Nayan Patel

console.log("___________________________________________");


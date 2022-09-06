// Operaters + - * / %

var firstNumber = 12;
var secondNumber  = 46;

var result;

result = firstNumber + secondNumber;

console.log(result);
console.log(secondNumber - firstNumber);
console.log(secondNumber * firstNumber);
console.log(secondNumber / firstNumber);
console.log(secondNumber % firstNumber);


//----------------------------------------------------

var numOne = 23.56;
var numTwo = 45.32;

console.log(numOne - numTwo);

//----------------------------------------------------

var sellPrice = 349;
var listingPrice = 399;

var discount;
discount = (listingPrice - sellPrice)/listingPrice *100;  // Find Percentage.
console.log("Discount is " + discount + ' %');

var roundDiscount;
roundDiscount = Math.round(discount); // Meth Function...
console.log(roundDiscount);
var mathFunctionDemo = Math.cos(40);
console.log(mathFunctionDemo);
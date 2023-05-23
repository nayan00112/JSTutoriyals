var v = new Number(6)
console.log(v);

console.log(v.toString);

var a = new Number(Number.MAX_VALUE)
console.log(a);

var a = new Number(Number.MIN_VALUE)
console.log(a);

var a = new Number(Number.POSITIVE_INFINITY)
console.log(a);

var a = new Number(Number.NEGATIVE_INFINITY)
console.log(a);

console.log(Number.isInteger(4));
console.log(Number.isInteger(4.3));

console.log(Number.isNaN('s'));
console.log(Number.isNaN(4));




/*
Output:

[Number: 6]
[Function: toString]
[Number: 1.7976931348623157e+308]
[Number: 5e-324]
[Number: Infinity]
[Number: -Infinity]
true
false
false
[Function: toString]
[Number: 1.7976931348623157e+308]
[Number: 5e-324]
[Number: Infinity]
[Number: -Infinity]
true
false
false
false
*/ 
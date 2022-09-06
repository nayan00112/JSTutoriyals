// Operators 

/*
There are following types of operators in JavaScript:
    Arithmetic Operators
    Comparison (Relational) Operators
    Bitwise Operators
    Logical Operators
    Assignment Operators
    Special Operators
*/


//---------------------------------------------------------------------------

// 1. Arithmetic Operators
var a = 3;
var b = 5;

console.log(a + b); // 8
console.log(a - b); // -2
console.log(a * b); // 15
console.log(a / b); // 0.6
console.log(a % b); // 3 [3 % 5]
console.log(b % a); // 2 [5 % 3]

//Increment, Decrement Operators:
console.log(a++); // 3 (now 'a' become 4)
console.log(++b); // 6 (now 'b' become 6)
console.log(a--); // 4 ('a' was 4)
console.log(--b); // 5 ('b' was 6)


//---------------------------------------------------------------------------

// 2. Comparison (Relational) Operators

var x = 4; // int
var y = 5; // int
var z = 4; // int
var w = '4'; // char

console.log(x == y);   //false
console.log(x == z);   // true
console.log(x != y);   // true
console.log(x < y);    // true
console.log(x > y);    //false
console.log(x <= z);   // true
console.log(x >= z);   // true
console.log(x === z);  // true
console.log(x == w);   // true
console.log(x === w);  //false
console.log(x !== w);  // true


//---------------------------------------------------------------------------

// 3. Bitwise Operators:

console.log((10 == 20) & (10 == 10)); // 0 (false)
console.log((10 == 20) | (10 == 10)); // 1 (true)
console.log((10 == 20) ^ (10 == 10)); // 1 (true)
console.log(~(10 === '10')); //-1 true
console.log(~(10 == '10')); //-2 true
console.log(10 << 2);  // 40
console.log(10 >> 2);  // 2
console.log(10 >>> 2); // 2


//---------------------------------------------------------------------------

// 4. Logical Operators:

console.log((3 > 4) && (4 != 3)); //false
console.log((3 > 4) || (4 != 3)); //false
console.log(!(10 == '10')); //false
console.log(!(2 != 2)); //true


//---------------------------------------------------------------------------

// 5. Assignment Operators

var p;
p = 4;
console.log(p);   // 4
p += 2
console.log(p);   // 6
p -= 1;
console.log(p);   // 5
p *= 4;
console.log(p);   // 20
p /= 2;
console.log(p);   // 10
p %= 2;
console.log(p);   // 0


//---------------------------------------------------------------------------


// JavaScript Special Operators:
/*
The following operators are known as JavaScript special operators.

    (?:)
        Conditional Operator returns value based on the condition. It is like if-else.

    ,
        Comma Operator allows multiple expressions to be evaluated as single statement.

    delete
        Delete Operator deletes a property from the object.

    in
        In Operator checks if object has the given property

    instanceof
        checks if the object is an instance of given type

    new
        creates an instance (object)

    typeof
        checks the type of object.

    void
        it discards the expression's return value.

    yield
        checks what is returned in a generator by the generator's iterator.

    Next
        TopicJavaScript If-else Statement

*/ 

var User = function (firstName, courseCount) {
    this.firstname = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);
    };
};

/*Not workinG:
var Nayan = User("Nayan", 2);
console.log(Nayan); // undefined

*/

var Nayan = new User("Nayan", 2); //Yes Working..
console.log(Nayan);
// User {
//     firstname: 'Nayan',
//     courseCount: 2,
//     getCourseCount: [Function (anonymous)]
//   }


var Sam = User("Sam", 1);
console.log(Sam); // undefined


var Jek = new User("Jek", 1);
console.log(Jek);
// User {
//     firstname: 'Jek',
//     courseCount: 1,
//     getCourseCount: [Function (anonymous)]
//   }
console.log(Jek.firstname); // Jek



//------------------------------------------------------------------------------

//Object look like:

var User1 = {
    fname: "Nayan",
    lname: "Patel"
}

console.log(User1.fname);
// Nayan

//We canot make muiltiple unique instancise like above.




// Function:

// 1. function
function userFun1(fName, lName) {
    var fName = fName;
    var lName = lName;
    return fName + lName;
}
console.log(userFun1("Rok", 2));
//Rok2

// 2. fucntion
var userFun2 = function (fName, lName) {
    var fName = fName;
    var lName = lName;
    return fName + lName;
}
console.log(userFun2("Serav", 1));
// Serav1



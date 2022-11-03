console.log("Hello world!!!");

console.log("______________________________________________________");

var Name = "Nayan";
console.log(Name);
console.log(`Name is : ${Name}`);

console.log("______________________________________________________");

var q = 4, p = 3;
console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p % q);

console.log(3 > 5);
console.log(3 < 5);

console.log("______________________________________________________");

var a = 5;
var b = 4;

if (a > b) {
    console.log("a is big");
}
else {
    console.log("b is big");
}


console.log("----------------------");

var x = 456;

if (x == 453) {
    console.log("456");
}
else if (x == 456) {
    console.log("456");
}
else {
    console.log("none");
}


console.log("______________________________________________________");

var i = 0;
for (i = 0; i < 5; i++) {
    console.log(i);
}
console.log("----------------------");

for (let k = 0; k < 5; k++) {
    console.log(k);
}

console.log("______________________________________________________");

i = 0;
while (i <= 4) {
    console.log(i);
    i++;
}

console.log("______________________________________________________");

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 4)

console.log("______________________________________________________");



var user = "admin";

switch (user) {
    case "normal_user":
        console.log("normal user");
    case "admin":
        console.log("Admin User");
    default:
        console.log("None");
}
console.log("______________________________________________________");

function MyFirstFun() {
    console.log("This is MyFirstFunction.");
}
MyFirstFun();
console.log("----------------------");

var MySecondFun = function () {
    console.log("This is MySecondFunction.");
}
MySecondFun();
console.log("----------------------");

var MyThirdFun = () => {
    console.log("This is MYThirdFunction.");
}
MyThirdFun();
console.log("----------------------");

function add(i, j) {
    console.log(i + j);
}
add(5, 7);
console.log("----------------------");

var subt = function (i, j) {
    console.log(i - j);
}
subt(6, 7);
console.log("----------------------");

var mul = (i, j) => {
    console.log(i * j);
}
mul(5, 2);
console.log("----------------------");

var div = (l, k) => {
    console.log(l / k);
}
div(8, 4.3);
console.log("----------------------");

var returnFun = () => {
    return "This is return";
}
console.log(returnFun());
console.log("----------------------");

var getandreturn = (name) => {
    return "${name}"
}
getandreturn("Nayan");
console.log("----------------------");

var nam = getandreturn("Marmik");
console.log(nam);



console.log("______________________________________________________");

var object = { title: "contant", title2: "contant2", }

console.log(object.title);
console.log(object["title2"]);

console.log("----------------------");

var Student = {
    name: "Nayankumar",
    rolno: 87,
    sem: 2,
    branch: "computer",
}
console.log(Student.name);
console.log(Student['sem']);
console.log(Student.branch);
var rn = Student.rolno;
console.log(rn);
for (let n in Student) {
    console.log(n);
    console.log(Student[n]);
}

console.log("----------------------");

var user = {
    fname: "Nayan",
    lname: "Patel",
    dob: function () {
        var dd = 14;
        var mm = 06;
        var yyyy = 2003;
        return "${this.mm}, ${this.mm}, ${this.mm}";
    }

}

console.log(user.dob);
console.log(user.fname);
console.log(user.lname);

console.log("----------------------");

var day = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
console.log(day[3]);
console.log(day[0]);
console.log(day[5]);

var list = [
    "Nayan",
    "Computer Engineering",
    19,
    "14-06-2003",
]
console.log(list[0]);
console.log(list[2]);
console.log(list[1]);
var ldata = list[3];
console.log(ldata);

console.log("----------------------");


var list2 = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
]
for (ii in list2) {
    console.log(ii);
    console.log(list2[ii]);
}

console.log("----------------------");


// Output:

/*
Hello world!!!
______________________________________________________
Nayan
Name is : Nayan
______________________________________________________
7
-1
12
0.75
3
false
true
______________________________________________________
a is big
----------------------
456
______________________________________________________
0
1
2
3
4
----------------------
0
1
2
3
4
______________________________________________________
0
1
2
3
4
______________________________________________________
0
1
2
3
4
______________________________________________________
Admin User
None
______________________________________________________
This is MyFirstFunction.
----------------------
This is MySecondFunction.
----------------------
This is MYThirdFunction.
----------------------
12
----------------------
-1
----------------------
10
----------------------
1.8604651162790697
----------------------
This is return
----------------------
----------------------
${name}
______________________________________________________
contant
contant2
----------------------
Nayankumar
2
computer
87
name
Nayankumar
rolno
87
sem
2
branch
computer
five
5
six
6
seven
7
eight
8
nine
9
ten
----------------------

*/
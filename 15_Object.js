// Object

var user = {
    firstName: "Hitesh",
    lastName: "Chaudhari",
    role: "Admin",
    loginCount: 89,
    facebookSignin : true
    
}


//both are same way, i like 1st one.
console.log(user.firstName);
console.log(user["firstName"]);

console.log(user.loginCount); //89
console.log(user.facebookSignin); // true

console.log(typeof(user)); //object
console.table(user); // in table formate.


//update valur
user.loginCount= 92;
console.log(user.loginCount); //92

console.log(user);


//=========================================================

// object 2

var user = {
    firstName: "Nayan",
    lastName: "Patel",
    role: "Admin",
    loginCount: 35,
    facebookSignIn: true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    }
};
console.log(user.firstName); // Nayan
console.log(user.getCourseCount()) // 0

user.buyCourse("Reat JS course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount()); //2

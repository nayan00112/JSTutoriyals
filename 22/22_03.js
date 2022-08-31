var User = function (firstName, courseCount) {
    this.firstname = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);
    };
};
var Nayan = new User("Nayan", 2);
console.log(Nayan.firstname); // Nayan

if (Nayan.hasOwnProperty("firstName")) {
Nayan.getCourseCount();
    
}



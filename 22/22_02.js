var User = function (firstName, courseCount) {
    this.firstname = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() {
    console.log(`Your first name is: ${this.firstname}`);
};



var Nayan = new User("Nayan", 2);

console.log(Nayan.firstname); // Nayan
Nayan.getCourseCount(); //course count is: 2
console.log(Nayan.firstname);
Nayan.getFirstname();

var Sem = new User("Sem", 1);
Sem.getCourseCount(); //course count is: 1
Sem.getFirstname();




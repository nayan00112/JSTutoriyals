function Student(sName, sRolNo){
    this.sName = sName;
    this.sRolNo = sRolNo;

}

Student.prototype.age = 19;

var Student1 = new Student();
console.log(Student1.age); // 19


var Student2 = new Student();
console.log(Student2.age); // 19
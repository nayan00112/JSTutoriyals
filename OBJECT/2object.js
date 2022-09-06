User = {
    name: "Raju",
    sername: "Parmar",
    emp_ID: 435,
    work_hour: 6,
    selary: function(){
        return this.work_hour * 240;
    }
}

console.log(User.name);
console.log(User.selary());

/*
Output:
Raju
1440
*/
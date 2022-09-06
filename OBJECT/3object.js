student = {
    name: "jitesh",
    sername: "patel",
    marks: {
        gujarati: 45,
        maths: 46,
        sst: 44,
        sanskriti: 48,
        science: 42,
    },

    average : function(){
        var avg = 0;
        for (let m in this.marks) {
            // console.log(this.marks[m]);
            avg = avg +this.marks[m];
        }
        return avg/5;
    }
}

console.log(student.average()); // 45
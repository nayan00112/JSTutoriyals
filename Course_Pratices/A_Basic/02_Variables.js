const a = 1
console.log(a)

let b = "234casdc"
console.log(b)

var name = "Nayan"
console.log(name)



// globle Variable, local variable

var globleVar = 4;

function fun(){
    var localVar = 5;
    console.log(globleVar);
    console.log(localVar);
}

fun()
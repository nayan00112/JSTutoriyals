for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.log("___________________________________");
var a = 5

while (a > 0) {
    console.log(a)
    a--
}
console.log("___________________________________");
var b = 6

do {
    console.log(b)
    b--
} while (b > 0)
console.log("___________________________________");

// for in loop 

let c = [4, 6, 7, '6', 'g', "567gfd", "nayan"]

for (let j in c) {
    console.log(j);
}
console.log("------");
for (let j in c) {
    console.log(c[j]);
}
console.log("------");

let d = {
    'a': "1",
    'b': "2",
    'c': "3",
}

for(let n in d){
    console.log(n);
}
console.log("------");
for(let n in d){
    console.log(d[n]);
}
console.log("------");

/* Output:
0
1
2
3
4
___________________________________
5
4
3
2
1
___________________________________
6
5
4
3
2
1
___________________________________
0
1
2
3
4
5
6
------
4
6
7
6
g
567gfd
nayan
------
a
b
c
------
1
2
3
------
*/ 
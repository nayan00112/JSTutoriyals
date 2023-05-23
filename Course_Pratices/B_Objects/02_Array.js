const a = [3, 5, 6, 78]

console.log(a[2]);
console.log(a[40]);

console.log(a.length);

for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}

for(let j in a){
    console.log(j);
    console.log(a[j]);
}

// _________________________________________________

var aaa = new Array()
aaa[0] = 8
aaa[1] = 6;
aaa[3] = 7;

console.log(a.length);
console.log(aaa[1]);
console.log(aaa[2]);
console.log(aaa);
console.log(aaa[8]);

/*
Output:
6
undefined
4
3
5
6
78
0
3
1
5
2
6
3
78
4
5
6
[ 3, 5, 6, 78 ]
undefined

E:\JSTutoriyals\Course_Pratices>node "e:\JSTutoriyals\Course_Pratices\B_Objects\02_Array.js"
6
undefined
4
3
5
6
78
0
3
1
5
2
6
3
78
4
6
undefined
[ 8, 6, <1 empty item>, 7 ]
undefined
*/
// for loop

for(let i = 0; i<6; i++){
  console.log(i);
}
/*
0
1
2
3
4
5
*/



for(let i = 0; i<6; ++i){
  console.log(i);
}
/*
0
1
2
3
4
5
*/



for(var i = 0; i<6; ++i){
  console.log(i);
}
/*
0
1
2
3
4
5
*/


// We can't use const, because it's very.
//for(const i = 0; i<6; ++i){
//    console.log(i);
//}


//===============================================================================

const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1950,
    "Tamil Nadu",
    "Maharashtra",
   ];
   
   console.log(typeof(myStates)); // object
   
   for(let i = 0; i <= myStates.length; i++){
     console.log(i);
   }
   /*
   Output:
   0
   1
   2
   3
   4
   5
   6
   */
   
   
   for(let i = 0; i <= myStates.length; i++){
     console.log(myStates[i]);
   }
   
   //Output: myList...
   
   
   
   for(let i = 0; i <= myStates.length; i++){
     if(typeof myStates[i] !== "string") continue;
     console.log(myStates[i]);
   }
   
   
   for(let i = 0; i < myStates.length; i++){
     if(typeof myStates[i] === "string") continue;
     console.log(myStates[i]);
   } //1950
   
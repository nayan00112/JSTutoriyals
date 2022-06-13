const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1950,
    "Tamil Nadu",
    "Maharashtra",
   ];
   
   
   
   let i = 0;
   
   while(i< myStates.length){
       console.log(myStates[i]);
       i++;
   }
   
   console.log("-------------------------");
   console.log("Do while Loop");
   let j=0;
   while(j< myStates.length){
       j++;
       console.log(myStates[j]);
   }
   //Include "Undefined"
   
   
   
   
   // Do While Loop
   console.log("-------------------------");
   let a = 0;
   do{
       console.log(myStates[a]);
       i++;
   } while (i < myStates.length);
   console.log("-------------------------");
   let b=0;
   do{
       console.log(b);
       b++;
   }while(b<7);
   
   
   console.log("-------------------------");
   var c = 0;
   for(;;){
       if(c>3) break;
       console.log(c);
       c++;
   }
   
   console.log("-------------------------");
   
   myStates.forEach((s) => (console.log(s)));
   
   
   
// inner function can use outer diclared variables.
// outer function cannot use inner defined variable.


var nameOne = "Nayan";
console.log(nameOne);

funOuter()

function funOuter()
{
    var nameOne = "Marmik"
    console.log(nameOne);
    funInner()
   function funInner() 
   {
       var nameOne = "Marmik and Nayan"
       console.log(nameOne);
   }
}



/*
Function declaration are scanned and made avaliable.
Variable declaration are scanned amd made undefined.
*/


function BillGst1(a)
{
    var a = a + 0.18 * a;
    console.log(`Final Ammount is ${a}`);
}

BillGst1(100);
//output 118


function BillGst2(a)
{
    var a = a + 0.18 * a;
    console.log(`Final Ammount is ${a}`);
}

BillGst2("100");
//output 10018 (str + num)


function BillGst3(a)
{
    var a = parseInt(a);
    a = a + 0.18 * a;
    console.log(`Final Ammount is ${a}`);
}

BillGst3(100);
//output 118


function BillGst4(a)
{
    var a = parseInt(a);
    console.log(`Final Ammount is ${a}`);
}

BillGst4("a");
//output NaN


function BillGst5(a)
{
    var a = parseInt(a);
    console.log(`Final Ammount is ${a}`);
}

BillGst5("80");
// output 85




//----------------------------------------




BillGst6(200);
 
function BillGst6(a)
{
    var a = parseInt(a);
    a = a + 0.07 * a;
    console.log(`Final Ammount is ${a}`);
}
//output 214


 
var BillGst7 = function (a)
{
    var a = parseInt(a);
    a = a + 0.07 * a;
    console.log(`Final Ammount is ${a}`);
}
BillGst7(200);
//output 214 (Worked)


BillGst8(200);

var BillGst8 = function (a)
{
    var a = parseInt(a);
    a = a + 0.07 * a;
    console.log(`Final Ammount is ${a}`);
}
//output Error

/*
./Playground/file0.js:81
BillGst8(200);
^

TypeError: BillGst8 is not a function
    at Object.<anonymous> (./Playground/file0.js:81:1)
    at Module._compile (internal../Playground/:1063:30)
    at Object.Module._extensions..js (internal../Playground/:1092:10)
    at Module.load (internal../Playground/:928:32)
    at Function.Module._load (internal../Playground/:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
 
 
/*
Function declaration are scanned and made avaliable.
Variable declaration are scanned amd made undefined.
*/ 
 
// Hear, function is defined below that function is called. So it is give an errors.

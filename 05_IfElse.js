// if Condition

var temperature = 34;
if (temperature > 35){
    console.log('Very HOT Temeperature.')
}
else{
    console.log('Cold Temperaure.')
}

//--------------------------------------------

isaunthecated = false
if (isaunthecated){
    console.log('Logedout');
}
else{
    console.log('Signup/Signin')
}

// Second Method:
// (Condition) ? {If true} : {else} ;
isaunthecated ? console.log("SignOut Button") : console.log("LogIn");

//--------------------------------------------

// == 
var numOne = 23;
var numTwo = 23;
if (numOne == numTwo){
    console.log('Same');
}
else{
    console.log('Different');
}

//--------------------------------------------

// or condition
var email = false;
var google = true;
var facebook = false;

if (email || facebook || google){
    console.log("Login Success");
}

//--------------------------------------------

// and condition
var switchOneInSeriesConnection = true;
var seitchTwoInSeriesConnection = true;

if (switchOneInSeriesConnection && seitchTwoInSeriesConnection){
    console.log("ON");
}
else{
    console.log("OFF");
}

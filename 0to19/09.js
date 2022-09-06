// falsy value

// undifined
// null
// 0
// ''
// NaN

var var1 = undefined;
if (var1){
    // not excitude due to undefined which is falsy value.
    console.log("Conditions with undefined");
}

var var2 = null;
if (var2){
    // not excitude due to null which is falsy value.
    console.log("Conditions with null");
}

var var3 = 0;
if (var3){
    // not excitude due to 0 which is falsy value.
    console.log("Conditions with null");
}

var var4 = '';
if (var4){
    // not excitude due to '' which is falsy value.
    console.log("Conditions with ''");
}

var var5 = NaN;
if (var5){
    // not excitude due to NaN which is falsy value.
    console.log("Conditions with NaN");
}

var var6 = "NaN";
if (var6){
    // Excitude due to var is not falsy value but it is string.
    console.log("Cindition with 'NaN' which is String.");
}

var var7 = "any string";
if (var7){
    console.log("Excitude successfully");
}    

var var8 = 2;
if (var8){
    // run successfully due to integer is non zero. Which is not falsy value.
    console.log("Excitude with nonZero integer");
}

var var9 = " ";
if (var9){
    console.log("Excitude successfully variable is space ' '");
}

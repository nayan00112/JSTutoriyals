var fs = require("fs")
fs.readFile('calc.js','utf-8', function(err, data){
    console.log(data);
})

/*
Output:

function add(a, b) {
    return a + b;
}
// this is js file.
*/
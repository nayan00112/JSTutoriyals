var fs = require('fs')
var data = "This is data."
fs.writeFile("writed2ndFile.txt", data,function(err, data){
    console.log("Done.");
})
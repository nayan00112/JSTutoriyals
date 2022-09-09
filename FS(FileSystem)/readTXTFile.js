var fs = require("fs")

fs.readFile('writed2ndFile.txt','utf-8', function(err, data){
    console.log(data);
}) // This is data.

var js = require("fs")

js.writeFile("writedFile.txt", "This is text which gonna be written in given file.", function (err) {
    console.log("Done !");
})
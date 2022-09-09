var fs = require("fs")

fs.readFile("index.html", 'utf-8', function (err, data) {
    console.log(err);
    console.log(data);
    console.log(data.length);

})


/*
Output:
null
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>the title</title>
</head>
<body>
    this is body part.
</body>
</html>
293
*/
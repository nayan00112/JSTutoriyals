const student = {
    name: 'Nayan',
    sername: 'Patel',
    email: 'nayanpatel1@g.c',
    address: {
        address1: '92Vija_______Society',
        address2: 'Meg___Bo_____',
        city: 'A___r',
        dis: 'kuchchh',
        State: 'Guj',
    },
};

const bookJSON = JSON.stringify(student);
console.log(bookJSON);
/*
{"name":"Nayan","sername":"Patel","email":"nayanpatel1@g.c","address":{"address1":"92Vija_______Society","address2":"Meg___Bo_____","city":"A___r","dis":"kuchchh","State":"Guj"}}
*/

//Make JSON file.
let fs = require('fs');

fs.writeFile('bookJSON.json', bookJSON, function (err) {
    console.log('json file has made successfully...'); // json file has made successfully...
})

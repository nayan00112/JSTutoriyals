let fs = require('fs');

fs.readFile('bookJSON.json', (err, data) => {

    let d = JSON.parse(data)

    createJSONObject(d)

})

function createJSONObject(data) {
    var data = data
    console.log(data);
};


/*
Output:

{
  name: 'Nayan',
  sername: 'Patel',
  email: 'nayanpatel1@g.c',
  address: {
    address1: '92Vija_______Society',
    address2: 'Meg___Bo_____',
    city: 'A___r',
    dis: 'kuchchh',
    State: 'Guj'
  }
}
*/
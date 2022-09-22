let fs = require('fs');

fs.readFile('bookJSON.json', (err, data) => {
    createJSONObject(data)
})

function createJSONObject(data) {
    let d = JSON.parse(data)
    console.log(d);
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
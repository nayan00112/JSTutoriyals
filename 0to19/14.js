//Array

var countries = ["India", "America", "USA", "Japan"];

var states = new Array("Gujarat", "Rajasthan", "Asam");

console.log(countries);
console.log(states);

console.log(countries[2]);
console.log(states[0]);

//We can use function.
console.log(countries.length);
console.log(states.length);

//we can change.
console.log(countries[1])
countries[1] = "Singapor"
console.log(countries[1]);
console.log(countries)

//====================================================================

//Areay 2

var information = new Array("Nayan", "Patel", 23, 3, true);

console.log(information);
//console.log(information.pop());
//output: true (Last element.)

information.pop();
console.log(information);

//---------------------------------------

var data = ["OkGoogle", "Siri", "Alaxa", "Bixiby"];

console.log(data);
data.unshift("Cortana")
console.log(data);
data.shift()
console.log(data);

console.log(data.indexOf("OkGoogle")); 
// 0

console.log(data.indexOf("NotInAray")) 
// -1

//---------------------------------------

console.log(Array.from("Apple"));
console.log(Array.from(02663)) //empty !



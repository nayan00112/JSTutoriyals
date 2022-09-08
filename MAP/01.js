let map = new Map();

map.set("Nayan", "Computer Engineer");
map.set("Jignesh", "Electrical Engineering");
map.set("Dharm", "Computer Engineering");

console.log(map.keys());
// [Map Iterator] { 'Nayan', 'Jignesh', 'Dharm' }

console.log(map.has("Nayan")); // true

for(let [k,v] of  map){
    console.log(k, " : ", v);
}

// Nayan  :  Computer Engineer
// Jignesh  :  Electrical Engineering  
// Dharm  :  Computer Engineering    


map.forEach((v, k)=>{
    console.log(k, " : ", v);
})

// Nayan  :  Computer Engineer
// Jignesh  :  Electrical Engineering  
// Dharm  :  Computer Engineering    

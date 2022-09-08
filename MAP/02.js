let map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

map.set("a", 6);

console.log(map);
// Map(3) { 'a' => 6, 'b' => 2, 'c' => 3 }

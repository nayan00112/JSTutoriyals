// by string literal

var stringname = "My String"
console.log(stringname);
console.log(stringname.charAt(4));
// by string object (using new keyword)

var string2 = new String("String using new keyword")
console.log(string2);
console.log(string2.charAt(2));
console.log(string2.charCodeAt(2)); // The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.  Returns the Unicode value of the character at the specified location.
console.log(string2.concat("Hello"));
console.log(string2.indexOf('r'));
console.log(string2.lastIndexOf('s',2));


console.log(string2.length);
console.log(string2.split(''));
console.log(string2.split(' '));

// Output:
/*
My String
t
[String: 'String using new keyword']
r
114
String using new keywordHello
2
-1
24
[
  'S', 't', 'r', 'i', 'n',
  'g', ' ', 'u', 's', 'i',
  'n', 'g', ' ', 'n', 'e',
  'w', ' ', 'k', 'e', 'y',
  'w', 'o', 'r', 'd'
]
[ 'String', 'using', 'new', 'keyword' ]
*/

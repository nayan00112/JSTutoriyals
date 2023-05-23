let obj = {
    id: 123,
    name: "Nayan",
    Email: "nayan123@g.c",
    phone_no: "1223234531",
    hobby : {
        One: "Critical Thinking",
        Two: "Coading",
        Three: "Creating",
    }
}

console.log(obj.name)

console.log(obj)

console.log(obj.id)

console.log(obj.hobby.One)
console.log(obj.hobby)


// Output:
// {
//     id: 123,
//     name: 'Nayan',
//     Email: 'nayan123@g.c',
//     phone_no: '1223234531',
//     hobby: { One: 'Critical Thinking', Two: 'Coading', Three: 'Creating' }
//   }
//   123
//   Critical Thinking
//   { One: 'Critical Thinking', Two: 'Coading', Three: 'Creating' }
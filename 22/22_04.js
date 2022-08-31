var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
};

var Nayan = Object.create(User);
console.log(Nayan);
Nayan.name = "Nayan Patel";
Nayan.getUserName();

// Output:
// {}

// view output in browser console, we get 
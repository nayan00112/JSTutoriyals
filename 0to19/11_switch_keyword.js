

// function

function getUserRole(name, role){
    switch(role){
        case "admin":
            return `${name} is have all access`;
            break; // break is not necessary while using return keyword.
        case "subadmin":
            return `${name} is have access to delet and creating groups.`;
            break; // break is not necessary while using return keyword
        case "testrepo":
            return `${name} can make test`;
            break; // break is not necessary while using return keyword
        case "user":
            return `${name} can access exam.`;
            break; // break is not necessary while using return keyword
            
        default:
            return `${name} is a temperary user.`;
            break;
    }
}

var userData = getUserRole("Nayan", "subadmin");
console.log(userData);
console.log(getUserRole("Marmik", "admin"));

//----------------------------------------


// Unique Method in javascript...

var getUserRole = function(name, role){
    switch(role){
        case "admin":
            return `${name} is have all access`;
            break; // break is not necessary while using return keyword.
        case "subadmin":
            return `${name} is have access to delet and creating groups.`;
            break; // break is not necessary while using return keyword
        case "testrepo":
            return `${name} can make test`;
            break; // break is not necessary while using return keyword
        case "user":
            return `${name} can access exam.`;
            break; // break is not necessary while using return keyword
            
        default:
            return `${name} is a temperary user.`;
            break;
    }
}

var userData = getUserRole("Nayan", "subadmin");
console.log(userData);
console.log(getUserRole("Marmik", "admin"));


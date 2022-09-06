// switch in javascript

var user = "admin";

switch (user)
{
    case "admin":
        console.log("You have all Permitions.");
        break;
    
    case "subadmin":
        console.log("you have permition to manage groups.");
        break;
        
   case "trstprep":
       console.log("you can generate test papse");
       break;
    
    case "user":
        console.log("you can attamp test.");
        break;
    default:
        console.log("Trial user");
        break;    
}
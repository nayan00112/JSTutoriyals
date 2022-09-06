abc1 = {
    name: "Nayan",
    sername: "Patel",
    returnName: function(){
        return abc1.name; // hear name is member of object, not variable so it can't be return direct as 'return name'.
    },
}

abc2 = {
    name: "Dharm",
    sername: "Patel",
    returnName: function(){
        return abc1.name;
    }
}

console.log(abc2.returnName());

/*
Hear we want to print 2nd object name, 
then ve gat first object name due to 
we do not change the object name in function return.

We need to change it abc1 to abc2 for 2nd object.
let's do it...
*/


abc1 = {
    name: "Nayan",
    sername: "Patel",
    returnName: function(){
        return abc1.name;
    },
}

abc2 = {
    name: "Dharm",
    sername: "Patel",
    returnName: function(){
        return abc2.name;
    }
}

console.log(abc2.returnName());


/*
done.!

Batter way is we use "this" keyword insted abc1 and abc2.
*/



abc1 = {
    name: "Nayan",
    sername: "Patel",
    returnName: function(){
        return this.name;
    },
}

abc2 = {
    name: "Dharm",
    sername: "Patel",
    returnName: function(){
        return this.name;
    }
}

console.log(abc2.returnName());

// Grate...

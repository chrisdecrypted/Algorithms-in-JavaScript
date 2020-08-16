// first example using a counter to break the recursion
//== our first call
var tracker = 0; 
var callMe = function() {
    tracker++ 
    if (tracker === 3) {
        return 'loops!';
    }
    callMe('anytime');
};
// var tracker = 1; 
var callMe = function() {
    tracker++ 
    if (tracker === 3) {
        return 'loops!';
    }
    callMe('anytime');
};
// var tracker = 2; 
var callMe = function() {
    tracker++ 
    if (tracker === 3) {
        return 'loops!';
    }
    callMe('anytime');
};
// var tracker = 3; 
var callMe = function() {
    tracker++ 
    if (tracker === 3) {
        return 'loops!'; // conditional hit
    } // now we're here
    callMe('anytime'); // should returns 'loops!'
    //  BUT in this space, we have an implicit return that will return 'undefined'
};

// So how can we use a recursive function to return our statement?
// We need to change the implicit return to an explicit return like this: 

var callMe = function() {
    tracker++ 
    if (tracker === 3) {
        return 'loops!'; 
    } 
    return callMe('anytime'); // now, it will return 'loops!'
};
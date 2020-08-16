var countChars = function(str) {
    var count = 0;
    // 1 operation

    for (var i = 0; i < str.length; i++) {
        count++; // n operations
    }
    return count; //1 operation 
};

//Linear 
console.log.countChars("dance");
console.log.countChars("walk");
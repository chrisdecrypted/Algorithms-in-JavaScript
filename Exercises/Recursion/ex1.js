function logNumbersRecursively (start, end) {
    function recurse(i) {
        if (i > end) {
            recurse (i + 1);
        }   
    }
    recurse(end);
    console.log(start,end);
}

logNumbersRecursively(1,3);

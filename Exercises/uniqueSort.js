const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]]; 
// sacrificing space complexity for time complexity by creating array to store cached items

    for (let i = 1; i < arr.length; i++) {
        // ^ this makes the assumption the first digit is not a duplicate
        // this is a bug because 4 will not be recognized as a duplicate until the middle of our example
        // we can change i to 0, we could also place arr[0] in our breadcrumbs object
        if (!breadcrumbs[arr[i]]) { // Check our cache. Have we seen [i]?
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
         }
    }

    return arr.sort((a,b) => a - b);
}

uniqSort([4,2,2,4,2,2,2]);

// The result is a linear complexity


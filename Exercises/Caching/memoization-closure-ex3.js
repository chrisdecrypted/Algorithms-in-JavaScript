

const memoize = (callback) =>  {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = callback;
            cache[n] = result;
            return result;
        }
    }
};

const memoizedTimes10 = memoize(times10); 
// Here, `times10` is a function declared somewhere else. 
// It will take the place of (callback)

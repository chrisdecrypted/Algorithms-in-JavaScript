const memoizedClosureTimes10 = () =>  {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    }
};

const memoClosureTimes10 = memoizedClosureTimes10();
try {
    console.log('Task 3 calculated value: ', memoClosureTimes10(9));
    console.log('Task 3 is cached value:', memoClosureTimes10(9));
} catch (e) {
    console.log(' Task 3: ', e);
}
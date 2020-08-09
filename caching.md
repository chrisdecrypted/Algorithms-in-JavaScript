### Caching

Instead, we can use what she calls the breadcrumb method. We will keep track of things that we've already seen (aka caching). Then we can do a property lookup on an object (which is a constant time operation).

We will remove the second loop and create an object called breadcrumbs. Then for each new value, we will place it in our object to create our cache. This is one type of caching, but it is not memoization.

```JS
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
```



## Memoization

**Memoization** is a caching the value that a function returns.

With factorials, we perform a lot of redudant calculations in a recursive pattern. We will use memoization in this case to capture repeated cases. This will be similar to what we did before in the previous caching exercise, but the value that we save to our object.

```JS
const factorial = (n) = > {
  // Calculations: n * (n-1) * (n-2) * .. * (2) * (1)
  return factorial;
}

factorial(35);
```

When we know what the factorial of 35 is, we only need to multiply it by 36 to get the factorial of 36. This allows us to increase the efficiency of our program.

Now let's take a simple math function (n * 10). We will store the value of n and the value the function retruns as an object.

Here is an example of what that memoization algorithim might look like:

```JS
const times10 = () => {n * 10};

const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) { //look for n in cache
        console.log('Fetching from cache: ',n);
        return cache[n];
    } else {
        console.log('Calculating result');
        let result = times10(n); //calculate n
        cache[n] = result; //store the result
        return result;
    }

}
```

If we were to pass the value 9 to our function, then our cache object would look like this:

```JS
const cache = {9 : 90};
```

Now, we're faced with a problem. If we were to place the cache object into our function scope, it would be "erased" by any subsequent iteration-- in which case we're not actually caching anything. 

However, we don't necessarily want to use our cache object as a globally scoped variable. As interactions grow, a globally scoped variable could be weigh down our application. 

### Closure

A solution for this is to use a **closure**. A closure does not clutter our global scope but allows us to store a function and it's contents. The instructor described this and because of the layers of abstraction, I was a little confused trying to understand what she meant. Take a look at this screenshot and I will walk through how I was trying to conceptualize a closure. 



![image-20200805122850553](/Users/christopher/Library/Application Support/typora-user-images/image-20200805122850553.png)

So, we basically have this:

```JS
const closure = function();
```

I wondered if a closure could be thought of as a data type. Something that might look like this:

```JS
{
"closure": "function":"n => {...}", "cache":["cachedN-0","cached10n-0","cachedN-1","cached10n-1,etc."] 
}
```

I was wrong because I misunderstood what the instructor meant about storing the information. I asked some senior developers about this.

This was their explanation: 

> a closure isn't a "thing" though
>
> it's a stateful function. just think of it that way
>
> it's stateful because it "closed over" a variable (externally references it every time the function is invoked)

So if your brain went to the same place, you might get more clarification with the upcoming examples. The data is not actually a part of some object, but the behavior of creating a stateful function allows us both portability and access to the cached information contained in the parent of the function. I realize that explanation might make it even more confusing to you, but continue on and I think you'll see what I mean even if my articulation is lacking.

Take another look at the screenshot above, notice that we are not calling the entire body of the `const memoizedClosureTimes10` . The closure, or stateful function **ONLY** calls the body of the **function that is being returned.** 

However, we still have access to what is declared in the **parent scope**. This means that our cache object is still accessible, but it is now **private**. Every time we call the function, we create a new execution environment with our local variables.

Our 3rd version is called `Memoization with Closure Solution` 

```JS
const memoizedClosureTimes10 = () =>  {
    let cache = {};
    return (n) => { // This is what is stored in memoClosureTimes10
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
```

The next logical step is to remove the hardcoded function of `n * 10`. This makes our code more portable and allows us to use with any function that we'd like.

The final version which we call `Generic Memoize Function Solution` looks like this:

```JS
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
// We can also replace arguments with (...args) to allow for multiple values to be passed through.
```

With simple functions like `n * 10`, the space-time complexity does not drastically change. Beyond the optimization of **cache vs no cache**, there is little difference in performance in these versions of code. However when more complex functions start being passed is where we are able to see the benefits. 


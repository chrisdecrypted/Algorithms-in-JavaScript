# **Pratical Guide to Algorithims with JS**

These are my notes after participiating in the Frontend Masters course of the same name. 

## Intro to Big O, Space/Time Complexity
Big O is just one type of metric for evaluating space-time complexity, but it is widely used in computer science settings. This is a concept that is frequently used to identify candidate programming strength in interview settings. When we talk about space-time complexity, what we are really trying to describe is the **worst-case scenario**.

### *Examples of Typical Complexity in JS*
These are patterns, and demonstrate a relationship with these code elements. This does not mean that every time you see x,y,z that you will immediately be able to identify the time-space complexity.

#### ***Constant Time : O(n)***

**for loop** = Typically a for loop will be linear O(n) where n ( as in i > n)  is the number of times the loop executes

**Const arr = [1,2,3]** calling a specific element like arr[0] 

**arr.pop()** // constant time operation because it always removes the last element => [1,2] 

**const obj = { a: 1 }**

**obj.a **

**1+2** Arithmetic operations (including > & <) are constant



#### ***Linear***

Shifting arrays ie: for  [1,2,3], add 0. Then we need to move 1, 2, 3 (whatever the size of the array) to accomodate 0. That makes the complexity **linear** O(n)

When we use things like sort, it usually results in **n(log n)** complexity.



#### Table

This table is also helpful for trying to identify complexity in a given algorithim. 

| Complexity | Operation                                      |
| ---------- | :--------------------------------------------- |
| O(1)       | Running a statement                            |
| O(1)       | Value look-up on an array, object, variable    |
| O(log n)   | Loop that cuts problem in half every iteration |
| O(n)       | Looping through values of an array             |
| O(n^2)     | Double nested loops                            |
| O(n^3)     | Triple nested loops                            |

This is still a general guideline. It is important to identify the value of n, we cannot assume that it is (for example) always the length of the array. We have to think about what is executing and how the input is changing as the code executes.

![image-20200804104224679](/Users/christopher/Source/notes/image-20200804104224679.png)

Image Source: https://www.bigocheatsheet.com/

## Calculating Time

**Logarithmic** O (log n)

As work is performed, the number of operations that need to be done decreases by a fraction. 

So if you're looping through an array and every time you loop you cut your problem in half, that would be a logarithmic time of base 2. Cutting the work into thirds, would result in base 3, etc.

This means that logarithmic time is often more performant than linear time when we have a large enough data set. 

## Space Complexity

**Questions to ask:**

Are you making a new data structure?

How often are you doing that in relation to your data set?

If working with recursion, we have to consider the call stack which also takes space in memory.

### Faster Algorithims

Here is an example of a program that can be optimized.

```JS
const isUnique = (arr) => {
    let result = true;

    for (let i=0; i < arr.length; i++) {
        console.log(`~~~OUTER LOOP ~~~ i === ${i}`);
        for (let j=0; j < arr.length; j++) {
            console.log(`~~~INNER LOOP ~~~ j === ${j}`);
            if (i !== j && arr[i] === arr[j]) {
                result = false;
        }
    }
}

return result;
};

console.log(isUnique([1,2,3]) === true);
console.log(isUnique([1,1,3]) === false);

```

OUTPUT:

```
~~~OUTER LOOP ~~~ i === 0
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
~~~OUTER LOOP ~~~ i === 1
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
~~~OUTER LOOP ~~~ i === 2
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
true
~~~OUTER LOOP ~~~ i === 0
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
~~~OUTER LOOP ~~~ i === 1
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
~~~OUTER LOOP ~~~ i === 2
~~~INNER LOOP ~~~ j === 0
~~~INNER LOOP ~~~ j === 1
~~~INNER LOOP ~~~ j === 2
true
```

The current time complexity is quadratic time with 2 loops and a total of 9 "steps" to evaluate for each item.
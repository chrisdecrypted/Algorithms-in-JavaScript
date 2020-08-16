# Recursion

Recursion is when a function calls itself. It is a large topic in computer science and the rest of the course will discuss how recursion is implemented in real world situations and programming archetypes.

Callstack game

1. Push called Fn on stack
2. Execute Fn body

Until..

... another fn is called:

​	Pause the current execution ad start at step 1.

...a return is hit:

​	Pop the current Fn off the stack

​	Resume executing the previous Fn

```JS
var callMe = function() {
  callMe();
  callMe();
  callMe('anytime');
};
```

This code loop forever and when space in memory is filled, you will get a stack overflow.

## Accessing Data in a Recursive Loop


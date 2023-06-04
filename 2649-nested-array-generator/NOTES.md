### Generator Function
The function* declaration (function keyword followed by an asterisk) defines a generator function.
​
### Yield keyword
yield keyword pauses the execution of generator function and the value of the expression following the yield keyword is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.
​
### Algorithm
1. We can use a built-in function flat() to get flat array with param Infinity to flatten all levels.
2. The flat() method iterates over each element of the array and checks if the element is an array itself and accepts an optional parameter, depth, which specifies the depth level to which the array should be flattened. If no depth parameter is provided, the default depth is 1.
​
​
​
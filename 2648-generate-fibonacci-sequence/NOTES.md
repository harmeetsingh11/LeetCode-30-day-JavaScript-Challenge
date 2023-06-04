```
var fibGenerator = function* () {
let num1 = 0,
num2 = 1;
​
while (true) {
yield num1;
// Parallel Assignment with destructuring
[num1, num2] = [num2, num1 + num2];
}
};
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
```
​
- Yield keyword is used in generator function instead of return keyword.
- When calling fibGenerator(), it will not yield num1.
- when `gen.next().value` called first time, it will yield num1 and pauses execution.
- when `gen.next().value` called second time, it will start execution the remaining part and continue till it yields.
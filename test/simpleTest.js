/**
 * simple way
 *
 */

let result = sum(3, 7);
let expected = 10;
if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`);
else console.log("working");

result = subtract(10, 5);
expected = 5;
if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`);
else console.log("working");

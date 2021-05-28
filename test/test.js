/**
 *  nodejs
 */
const { test, expect } = require("./fundementalTest");

/**
 * @param {number} a
 * @param {number} b
 */
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

/**
 * Testing
 */
test("sum adds two numbers", sumTest);

function sumTest() {
  let result = sum(1, 2);
  let expected = 3;
  expect(result).toBe(expected);
}

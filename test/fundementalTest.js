/**
 * library
 */

function test(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`);
  } catch {
    console.error(`✘ ${title}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        console.log(`expected ${expected} result was ${actual}`);
        throw new Error(`${actual} is not equal to ${expected}`);
      } else {
        console.log(
          `%c ${actual} is equal to ${expected}, success`,
          "background: #bada55; color: #111"
        );
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}

module.exports.test = test;
module.exports.expect = expect;

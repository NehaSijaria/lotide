// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;
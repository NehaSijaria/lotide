// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 14);

const head = function(arr) {
  return arr[0];
} 

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");

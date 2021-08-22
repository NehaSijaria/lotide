const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Passed`);
  } else {
    console.log(`⭕⭕⭕ Failed`);
  }
}

const eqArrays = function(array1, array2) {

  if (JSON.stringify(array1) === JSON.stringify(array2)) return true;
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
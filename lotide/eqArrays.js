const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ PASS');
  } else {
    console.log(`🔴 FAIL`);
  }
};

const eqArrays = function(arr1, arr2){
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
}

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays([1, "2"], [1, "2"]), true);


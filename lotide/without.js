
const without = function(source, itemsToRemove) {

  // assertArraysEqual(source, itemsToRemove);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      // console.log(items);
      //  if ((source[i] !== itemsToRemove[j])) {
      //    if (source.length !== itemsToRemove.length || i===j) {
      //     itemsRemoved.push(source[i]);
      //    }
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }

    }
  }
  console.log(source);
  return source;
};

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};

  // loop through the object
  for (let key in itemsToCount) {
    // if an item is to be counted
    if (itemsToCount[key]) {
      // loop though the list to find instances of that item
      for (let name of allItems) {
        // if we find a name which matches the item to be counted
        if (name === key) {
          // if no key for that name exists in our result, then create a key and give it a value of 1
          if (!result[key]) {
            result[key] = 1;
          } else { // increment the value associated with that key in our result by 1
            result[key] += 1;
        }
        }
      }
    }
  }

  return result;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
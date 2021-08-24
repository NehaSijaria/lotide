
const findKeyByValue = function(showsByGenre, name) {
  let firstKey = '';
  let showName = '';
  for (let genre of Object.keys(showsByGenre)) {
    showName = showsByGenre[genre];
    if (showName === name) {
      firstKey = genre;
    }
  }
  return firstKey;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;
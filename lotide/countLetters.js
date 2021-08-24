
const countLetters = function(str) {
  let result = {};
  for (let letter of str) {
    
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};

// const result1 = countLetters('Hello');
// console.log(result1);

// assertEqual(result1["H"], 1);
// assertEqual(result1["E"], 1);
// assertEqual(result1["l"], 2);
// assertEqual(result1["o"], 1);

module.exports = countLetters;


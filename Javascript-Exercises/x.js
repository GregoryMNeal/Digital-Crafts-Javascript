/*  Letter Histogram

Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:

> letterHistogram('bananas')
{ b: 1, a: 3, n: 2, s: 1 }
Note: the order of the keys doesn't matter.

*/

function letterHistogram(word) {
  // declare an empty dictionary object
  var letterDict = {};
  // iterate through the word one letter at a time
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (letter in letterDict) {
      letterDict[letter] = letterDict[letter] + 1;
    } else {
      letterDict[letter] = 1;
    }
  }
  return letterDict;
}

var word = 'bananas';
console.log(letterHistogram(word));

/*  Print a Square

Write a function printSquare which is given a size and prints a square of that size using asterisks.

> printSquare(5)
*****
*****
*****
*****
*****

*/

function printSquare (size) {
  /* Create the 'X' axis */
  var xaxis = [];
  for (var x = 1; x <= size; x++) {
    xaxis.push('*');
  }
  /* Create the 'Y' axis */
  for (var y = 1; y <= size; y++) {
    console.log(xaxis.join(''));
  }
}

printSquare(5);

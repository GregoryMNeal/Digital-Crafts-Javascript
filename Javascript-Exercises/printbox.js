/*  Print a box

Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

> printBox(6, 4)
******
*    *
*    *
******

*/

function printBox (width, height) {
  /* Prepare top and bottom of the box */
  var top_bottom = [];
  for (var x = 1; x <= width; x++) {
    top_bottom.push('*');
  }
  /* Prepare middle section of the box */
  var middle = [];
  for (var x = 1; x <= width; x++) {
    if (x == 1 || x == width) {
      middle.push('*');
    } else {
      middle.push(' ');
    }
  }
  /* Print the top of the box */
  console.log(top_bottom.join(''));
  /* Print the middle of the box */
  for (var x = 1; x <= height - 2; x++) {
    console.log(middle.join(''));
  }
  /* Print the bottom of the box */
  console.log(top_bottom.join(''));
}

printBox(6, 4);

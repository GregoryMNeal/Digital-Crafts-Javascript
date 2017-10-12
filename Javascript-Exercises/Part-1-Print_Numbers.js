/* Print Numbers

Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

> printNumbers(1, 10)
1
2
3
4
5
6
7
8
9
10

Write two versions of the above function. One using a while loop and the other using a for loop.

*/

function printNumbersWhile (start, end) {
  n = start;
  while (n <= end) {
    console.log(n);
    n++;
  }
}

function printNumbersFor (start, end) {
  for (var n=start; n <= end; n++) {
    console.log(n);
  }
}


start = 1;
end = 10;
printNumbersWhile(start, end);
printNumbersFor(start, end);

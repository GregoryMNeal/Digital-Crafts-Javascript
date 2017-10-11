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

*/

function printNumbers (start, end) {
  for (var number=start; number <= end; number++) {
    console.log(number);
  }
}

printNumbers(1, 10);

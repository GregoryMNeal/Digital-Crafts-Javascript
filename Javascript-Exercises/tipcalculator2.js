/* Tip Calculator 2

Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46

*/

function tipAmount (billamount, los) {
  var tip = 0;
  if (los == 'good') {
    tip = billamount * .20;
  }
    else if (los == 'fair') {
      tip = billamount * .15;
    }
      else if (los == 'bad') {
        tip = billamount * .10;
      }
  return tip;
}

function totalAmount (billamount, los) {
  total = billamount + tipAmount(billamount, los)
  return total;
}

console.log(totalAmount(10.00, 'good'));
console.log(totalAmount(10.00, 'fair'));
console.log(totalAmount(10.00, 'bad'));

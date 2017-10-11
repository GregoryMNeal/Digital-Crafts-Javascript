/* Exercise 2

Tip Calculator

Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good')
20
> tipAmount(40, 'fair')
6

*/

function tipAmount (total, los) {
  console.log(total)
  console.log(los)
  if (los = 'good') {
    tip = total * .20;
  }
    else if (los = 'fair') {
      tip = total * .15;
    }
      else if (los = 'bad') {
        tip = total * .10;
      }
        else {
          tip = 0
        }
  return tip;
}

t = tipAmount(10.00, 'good')
console.log(t);
t = tipAmount(10.00, 'fair')
console.log(t);
t = tipAmount(10.00, 'bad')
console.log(t);

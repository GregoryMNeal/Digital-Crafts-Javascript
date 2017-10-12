/*  Exercise 1

Given the following dictionary, representing a mapping from names to phone numbers:

var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
Write code to do the following:

1. Print Elizabeth's phone number.
2. Add a entry to the dictionary: Kareem's number is 938-489-1234.
3. Delete Alice's phone entry.
4. Change Bob's phone number to '968-345-2345'.
5. Given this code var personName = 'Elizabeth';, use the variable     personName to access the dictionary entry. Use a for...in loop to print all the phone entries.

*/

var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

// 1. Print Elizabeth's phone number.

console.log(phonebookDict['Elizabeth'], '\n');

// 2. Add a entry to the dictionary: Kareem's number is 938-489-1234.

phonebookDict.Kareem = '938-489-1234';
console.log(phonebookDict);

// 3. Delete Alice's phone entry.

delete phonebookDict.Alice;
console.log(phonebookDict);

// 4. Change Bob's phone number to '968-345-2345'.

phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict);

// 5. (part 1) Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.

var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

// 5. (part 2) Use a for...in loop to print all the phone entries. */

for (var attribute in phonebookDict) {
  var value = phonebookDict[attribute];
  console.log(`${attribute}: ${value}`);
}

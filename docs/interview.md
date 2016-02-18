```javascript
//If str = '{0} and {1} or {2}' and values = ['king', 'Hey', 'kumar'] then output should be 'king and Hey or kumar'
//If str = '{0}{1}{2}' and values =  ['king', 'Hey', 'kumar'] then output should be 'kingHeykumar'
//If str = 'this is beautiful day {2}' and values = ['a', 'b', 'fruit'] then output should be 'this is beautiful day fruit'
//Write generic formatString implmentation

function formatString(str, values) {
    // have an array with numbers
    // replacing values
    var newString = '';
    for(var i=0; i<values.length; i++) {
        str = str.replace('{'+i+'}', values[i]);
    }
    return str; 
}
console.log(formatString(str, values));

// Write a program that generates fibonnacci series using recursion. 
// For ex generate an output like 1,1,2,3,5,8,13,21,34,55,89,.....,1000. 
// Every number is a sum of previous 2 numbers with the exception of number 1 which is repeated twice. 
// Terminate your program when the last number is >= 1000

function generateFibonnacci(num1, num2) {
  if(num2<=1000) {
    generateFibonnacci(num2, num1+num2) ;
  }
}
```

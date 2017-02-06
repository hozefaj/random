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
// F(n) = F(n-1) + F(n-2)

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// with resursion
// O(2^n): exponential complexity
function fibonacci(num) {
  if (num <= 1) return 1;
  
  return fibonacci(num-1) + fibonacci(num-2);
}

// resursion with memotization
// reducing the time complexity to O(n)
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

```

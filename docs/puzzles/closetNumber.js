// You are given 3 numbers a, b and x.
// You need to output the multiple of x which is closest to ab. If more than one answer exists , display the smallest one.

var a = 498778857;
var b = 1;
var x = 791698928;

var apb = parseInt(Math.pow(a, b));

function getClosetMultiple(num, x) { 
  var multiple = parseInt(num / x);
  
  // base case
  if(num < 1) return 0;
  
  if(x > num) {
    if(x-num < num) return x;
    return 0;
  }

  // other cases
  var lowerDiff = Math.abs((multiple * x) - num);
  var upperDiff = Math.abs(((multiple+1) * x) - num);
  
  if(lowerDiff <= upperDiff) return multiple * x;
  else return ((multiple+1) * x);
}

console.log(getClosetMultiple(apb, x));

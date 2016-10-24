// A Smith number is a composite number, the sum of whose digits is the sum of the digits
// of its prime factors obtained as a result of prime factorization (excluding 1).

// calculate sum of digits
function sumOfDigits(num) {
  var digits = num.toString().split('');
  let sum = 0;
  
  digits.forEach((digit) => sum = sum + parseInt(digit));
  return sum;
}


// get all prime factors
function getAllFactorsFor(remainder) {
  var factors = [], i;

  for (i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      factors.push(i);
      remainder /= i;
    }
  }

  return factors;
}

function isSmithNumber(number) {
  if(sumOfDigits(number) === sumOfDigits(getAllFactorsFor(number).join(''))) {
    return 1; // is smith number 
  } else {
    return 0; // not a smith number
  }
}

// sample data
console.log(isSmithNumber(378));

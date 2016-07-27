function processNumber(number) {
  // convert to binary
  var binaryArr  = [];
  while(number >= 1){
    binaryArr.push(number % 2);
    number = Math.floor(number/2);
  }

  // add missing bits
  for(var i=binaryArr.length; i<33; i++){
    binaryArr.push(0);
  }

  // reverse the bits
  var reversedArr = [];
  for(var i=0; i<33; i++){
    binaryArr[i] === 0 ? reversedArr.push(1) : reversedArr.push(0);
  }

  // var binary = reversedArr.reverse().join('');
  var binary = reversedArr.reverse();

  // convert reversed back to decimal
  var finalDecimal = 0;
  var base = 0;
  for(var j=binary.length, i=0; j>1; j--,i++) {
    binary[j-1] === 0 ? base = 0 : base = 2;
    if(base === 0 && i=== 0) {
      finalDecimal = 0;
    } else {
      finalDecimal = finalDecimal + Math.pow(base, i);    
    }
  }
  return finalDecimal;
}

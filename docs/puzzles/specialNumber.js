// You are given an integer N. 
// Can you find the least positive integer X made up of only 9's and 0's, such that, X is a multiple of N?

var number = 348;
var isSpecial = false;

for(var i=1; ;i++) {
    var multiple = number * i;
  
  switch(multiple % 9) {
     case 0: {
       var digits = multiple.toString().split(''); 
       for(var j=0; j<digits.length; j++) {
         if(parseInt(digits[j], 10) === 9 ||
            parseInt(digits[j], 10) === 0) {
           isSpecial = true;
         } else {
           isSpecial = false;
           break;
         }
       }
       break;
     }
     default: break;
     }
  
  console.log(multiple);
  if(isSpecial) {
    console.log(multiple);
    break;
  }
}

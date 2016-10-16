// Caesar's cipher rotated every letter in a string by a fixed number delta.
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

function CaesarCipher(str, delta) {

var splitStr = str.split('');
var newStr = [];
var k = delta % 26;
  
for(var i=0; i<splitStr.length; i++) {
  var ascii = splitStr[i].charCodeAt();
  
  // if uppercase
  if(ascii >= 65 && ascii <= 90) {
    ascii = ascii + k;
    //check if circling around is needed
    if(ascii > 90) {
      ascii = 64 + (ascii - 90);
    }
    newStr.push(String.fromCharCode(ascii));
  }
  // if lowercase
  else if(ascii >= 97 && ascii <= 122) {
    ascii = ascii + k;
    //check if circling around is needed
    if(ascii > 122) {
      ascii = 96 + (ascii - 122);
    }
    newStr.push(String.fromCharCode(ascii));
  }
  // if any other character
  else {
    newStr.push(String.fromCharCode(ascii));
  }
}

var encodedStr = newStr.join('');
console.log(encodedStr);
}

CaesarCipher('www', 87);

// Given the time in numerals we may convert it into words

const getValues = (T) => {
  switch(T) {
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    case 10: return 'ten';
    case 11: return 'eleven';  
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 14: return 'fourteen';
    case 15: return 'fifteen';
    case 16: return 'sixteen';
    case 17: return 'sevnteen';
    case 18: return 'eighteen';
    case 19: return 'nineteen';
    case 20: return 'twenty';
    case 21: return 'twenty one';
    case 22: return 'twenty two';
    case 23: return 'twenty three';
    case 24: return 'twenty four';
    case 25: return 'twenty five';
    case 26: return 'twenty six';
    case 27: return 'twenty seven';
    case 28: return 'twenty eight';
    case 29: return 'twenty nine';
  }
}

const checkPural = (T) => {
  if(T === 1 || T === 59) return '';
  return 's';
}

const timeInWords = (H, M) => {
  M = Number.parseInt(M);
  
  if (M === 0) {
    console.log(`${getValues(H)} o' clock`);
  }
  else if (M === 30) {
    console.log(`half past ${getValues(H)}`);
  }
  else if (M === 15) {
    console.log(`quarter past ${getValues(H)}`);
  }
  else if (M === 45) {
    console.log(`quarter to ${getValues(H+1)}`);
  }
  else if (M < 30) {
    console.log(`${getValues(M)} minute${checkPural(M)} past ${getValues(H)}`);
  }
  else if (M > 30) {
    console.log(`${getValues(60-M)} minute${checkPural(M)} to ${getValues(H+1)}`);
  }
}

timeInWords(5, 28);

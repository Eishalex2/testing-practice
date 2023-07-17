function caesarCipher(string, shift) {
  const array = string.split('');
  const convertedAndShifted = array.map(char => {
    if (/[A-Z]/.test(char)) return (char.charCodeAt(0) + shift);
    else if (/[a-z]/.test(char)) return (char.charCodeAt(0) + shift);
    else return char;  
  });

  const backToString = convertedAndShifted.map(num => {
    // capital A-Z is between 65 and 90, inclusive
    if (num - shift >= 65 && num - shift <= 90) {
      if (num > 90) return String.fromCharCode(num - 26);
      return String.fromCharCode(num);
    // lowercase a-z is between 97 and 122, inclusive
    } else if (num - shift >= 97 && num - shift <= 122) {
      if (num > 122) return String.fromCharCode(num - 26);
      return String.fromCharCode(num);
    // handle punctuation
    } else return num;
  });  
  return backToString.join('');
}

export default caesarCipher;
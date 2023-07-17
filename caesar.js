function caesarCipher(string, shift) {
  const array = string.split('');
  const convertedAndShifted = array.map(char => {
    if (/[A-Z]/.test(char)) return (char.charCodeAt(0) + shift);
    else if (/[a-z]/.test(char)) return (char.charCodeAt(0) + shift);
    else return char;  
  });

  const backToString = convertedAndShifted.map(num => {
    if (num - shift >= 65 && num - shift <= 90) {
      if (num > 90) return String.fromCharCode(num - 26);
      return String.fromCharCode(num);
    } else if (num - shift >= 97 && num - shift <= 122) {
      if (num > 122) return String.fromCharCode(num - 26);
      return String.fromCharCode(num);
    } else return num;
  });  
  return backToString.join('');
}

export default caesarCipher;
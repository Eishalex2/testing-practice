export default function reverseString(string) {
  let array = string.split('');
  let reversed = array.slice().reverse();
  return reversed.join('');
}
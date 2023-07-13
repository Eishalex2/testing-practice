function capitalize(string) {
  let array = string.split('');
  let first = array[0].toUpperCase();
  let theRest = array.splice(1).join('').toLowerCase();
  return first.concat(theRest);
}

export default capitalize;
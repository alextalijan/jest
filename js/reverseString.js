const reverseString = function thatReturnsTheReversedString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i];
  }

  return reversedString;
};

export default reverseString;

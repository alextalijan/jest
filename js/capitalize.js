const capitalize = function thatUppercasesFirstLetterOfTheString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalize;

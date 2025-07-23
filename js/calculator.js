const calculator = (function thatContainsMainMathOperations() {
  const add = function thatAddsTwoNumbers(num1, num2) {
    return num1 + num2;
  };

  const subtract = function thatSubtractsFromANumber(num, subtrahend) {
    return num - subtrahend;
  };

  const multiply = function thatMultipliesTwoNumbers(num1, num2) {
    return num1 * num2;
  };

  const divide = function thatDividesFromANumber() {};

  return { add, subtract, multiply, divide };
})();

export default calculator;

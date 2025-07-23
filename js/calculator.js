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

  const divide = function thatDividesFromANumber(dividend, divisor) {
    if (divisor === 0) {
      throw new Error('Dividing by 0 is prohibited!');
    }

    return dividend / divisor;
  };

  return { add, subtract, multiply, divide };
})();

export default calculator;

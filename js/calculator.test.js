import calculator from './calculator.js';

describe('Addition', () => {
  it('Adds two positive numbers', () => {
    expect(calculator.add(5, 2));
  });
  it('Adds negative numbers properly', () => {
    expect(calculator.add(3, -2)).toBe(1);
    expect(calculator.add(-5, -4)).toBe(-9);
  });
  it('Adds real numbers', () => {
    expect(calculator.add(0.2, 0.3)).toBeCloseTo(0.5);
  });
});

describe('Subtraction', () => {
  it('Subtracts two positive numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(3, 9)).toBe(-6);
  });
  it("Adds the subtractor if it's negative", () => {
    expect(calculator.subtract(2, -9)).toBe(11);
  });
  it('Subtracts real numbers', () => {
    expect(calculator.subtract(1.8, 0.7)).toBeCloseTo(1.1);
  });
});

describe('Multiplication', () => {
  it('Multiplies positive numbers', () => {
    expect(calculator.multiply(2, 7)).toBe(14);
  });
  it('Multiplies successfully with 1 and 2 negative numbers', () => {
    expect(calculator.multiply(5, -4)).toBe(-20);
    expect(calculator.multiply(-7, -4)).toBe(28);
  });
  it('Multiplication with zero equals zero', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });
  it('Multiplies real numbers', () => {
    expect(calculator.multiply(0.5, 1.6)).toBeCloseTo(0.8);
  });
});

describe('Division', () => {
  it('Divides two numbers properly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  it('Throws error when dividing by 0', () => {
    expect(() => calculator.divide(10, 0)).toThrow(
      Error('Dividing by 0 is prohibited!')
    );
  });
  it('Pays attention to the sign of the result', () => {
    expect(calculator.divide(20, -5)).toBe(-4);
    expect(calculator.divide(-100, -20)).toBe(5);
  });
  it('Divides real numbers properly', () => {
    expect(calculator.divide(0.5, 0.1)).toBeCloseTo(5);
  });
});

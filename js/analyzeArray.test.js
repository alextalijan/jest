import analyzeArray from './analyzeArray.js';

describe('Average', () => {
  it('Calculates the average properly', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });
  it('Calculates average even with negative numbers', () => {
    expect(analyzeArray([20, -10, 2, 6, 1, 5]).average).toBe(4);
  });
  it('Returns null for average if the array is emtpy', () => {
    expect(analyzeArray([]).average).toBe(null);
  });
});

describe('Minimum', () => {
  it('Gives the proper minimum', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });
  it('Gives proper minimum when array contains negative numbers', () => {
    expect(analyzeArray([1, 50, 22, -1, 0, 7]).min).toBe(-1);
  });
  it('Returns null for minimum if the array is emtpy', () => {
    expect(analyzeArray([]).min).toBe(null);
  });
});

describe('Maximum', () => {
  it('Gives the proper maximum', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });
  it('Returns null for maximum if the array is emtpy', () => {
    expect(analyzeArray([]).max).toBe(null);
  });
});

describe('Length of array', () => {
  it('Gives the proper length of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
  it('Gives 0 when the array provided is empty', () => {
    expect(analyzeArray([]).length).toBe(0);
  });
});

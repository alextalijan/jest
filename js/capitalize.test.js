import capitalize from './capitalize.js';

it('First letter capitalized', () => {
  expect(capitalize('orange')).toBe('Orange');
});

it("Don't lowercase uppercased letters", () => {
  expect(capitalize('baBy')).toBe('BaBy');
});

it("Don't capitalize already capitalized words", () => {
  expect(capitalize('John')).toBe('John');
});

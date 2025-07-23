import caesarCipher from './caesarCipher.js';

it('Encrypts the string properly', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

it('Encrypts the string properly with a negative shift factor', () => {
  expect(caesarCipher('def', -3)).toBe('abc');
});

it('Wraps the alphabet when shift factor moves a letter beyond it', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('Preserves capitalized letters', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

it('Preserves punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

import reverseString from './reverseString.js';

it('Returns reversed string', () => {
  expect(reverseString('magician')).toBe('naicigam');
});

it('Preserves capital letters', () => {
  expect(reverseString('Gamer')).toBe('remaG');
  expect(reverseString('hallIbuRton')).toBe('notRubIllah');
});

it('Returns empty string for empty input', () => {
  expect(reverseString('')).toBe('');
});

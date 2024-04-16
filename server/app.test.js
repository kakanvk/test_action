import isPrime from './app';

test('2 là số nguyên tố', () => {
  expect(isPrime(2)).toBe(true);
});

test('4 không là số nguyên tố', () => {
  expect(isPrime(4)).toBe(false);
});

test('17 là số nguyên tố', () => {
  expect(isPrime(17)).toBe(true);
});

test('20 không là số nguyên tố', () => {
  expect(isPrime(20)).toBe(false);
});

test('53 là số nguyên tố', () => {
  expect(isPrime(53)).toBe(true);
});

import caesarCipher from "./caesar";

test('shift by 1', () => {
  expect(caesarCipher('abcde',1)).toBe('bcdef');
});

test('wrapping', () => {
  expect(caesarCipher('xyz', 2)).toBe('zab');
});

test('same case', () => {
  expect(caesarCipher('AbCdE', 2)).toBe('CdEfG');
});

test('same case wrapping', () => {
  expect(caesarCipher('xyzXYZ', 3)).toBe('abcABC');
});

test('punctuation', () => {
  expect(caesarCipher('Hey, you!', 1)).toBe('Ifz, zpv!');
});
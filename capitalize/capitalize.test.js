import capitalize from "./capitalize";

test('makes first alpha char capital', () => {
  expect(capitalize('stuff')).toBe('Stuff');
});

test('capitalize with all caps', () => {
  expect(capitalize('THINGS')).toBe('Things');
});
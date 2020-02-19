import convert from '../index';

test('Введено десятичные числа - 10', () => {
  const expected = 10;
  const received = convert('10');
  expect(received).toBe(expected);
});

test('Введено не десятичное число 10+10', () => {
  const expected = 'error';
  const received = convert('10+10');
  expect(received).toBe(expected);
});

test('Введено не десятичное число - 10/10', () => {
  const expected = 'error';
  const received = convert('10/10');
  expect(received).toBe(expected);
});


test('ВВведено не десятичное число - 3E8', () => {
  const expected = 'error';
  const received = convert('3E8');
  expect(received).toBe(expected);
});


test('Введено не десятичное число- 1dfsf4564654', () => {
  const expected = 'error';
  const received = convert('1dfsf4564654');
  expect(received).toBe(expected);
});

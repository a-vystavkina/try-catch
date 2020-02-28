import validateNumber from './js/validateNumber';

test('Введено десятичное число', () => {
  const expected = 11;
  const received = validateNumber('11');
  expect(received).toBe(expected);
});

test('Введено двоичное число', () => {
  const expected = 'error';
  const received = validateNumber('0B00000000011111111111111111111111');
  expect(received).toBe(expected);
});

test('Введено восмеричное число', () => {
  const expected = 'error';
  const received = validateNumber('0755');
  expect(received).toBe(expected);
});

test('Введено шестнадцатеричное число', () => {
  const expected = 'error';
  const received = validateNumber('0XA');
  expect(received).toBe(expected);
});

test('Введена строка', () => {
  const expected = 'error';
  const received = validateNumber('stroka');
  expect(received).toBe(expected);
});

test('Введен набор цифр и букв', () => {
  const expected = 'error';
  const received = validateNumber('1dfsf4564654');
  expect(received).toBe(expected);
});


test('Ввведены символы', () => {
  const expected = 'error';
  const received = validateNumber('#$%^&*');
  expect(received).toBe(expected);
});


test('Введена пустая строка', () => {
  const expected = 'error';
  const received = validateNumber(' ');
  expect(received).toBe(expected);
});

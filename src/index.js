export default function convert(number) {
  try {
    if (parseFloat(number).toString() !== number) {
      throw new Error('Введено не число');
    }
    return Number(number);
  } catch (e) {
    return ('error');
  }
}

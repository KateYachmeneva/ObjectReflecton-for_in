import orderByProps from '../js/user';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('function will work without properties', () => {
  expect(() => orderByProps(obj)).not.toThrow();
});

test('will return correct object', () => {
  const referance = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(referance);
});

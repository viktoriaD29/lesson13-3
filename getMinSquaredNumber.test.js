import getMinSquaredNumber from './getMinSquaredNumber'

it('shoud get null', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
})

it('shoud get null, but not array', () => {
  const result = getMinSquaredNumber('fgf');

  expect(result).toEqual(null);
})

it('shoud get square of smallest number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, 20]);

  expect(result).toEqual(4);
})
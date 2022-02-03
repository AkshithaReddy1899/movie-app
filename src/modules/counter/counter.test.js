import Counter from './movieCounter.js';

test.only('counter return correct number', () => {
  const mock = [1, 2, 3, 4, 5];

  const data = mock;

  const count = Counter(data);
  
  Counter(mock);
  expect(count).toEqual(5);
});

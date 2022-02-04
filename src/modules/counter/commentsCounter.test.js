import CommentsCounter from "./commentsCounter";

test.only('Comments counter return correct number', () => {
  const mock = [1, 2, 3,];

  const data = mock;

  const count = CommentsCounter(data);

  expect(count).toEqual(3);
});

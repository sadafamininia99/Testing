// asyncFunction.test.js
const asyncFunction = require('./asyncFunction');

test('asyncFunction returns the fetched data', async () => {
  const data = await asyncFunction();
  expect(data).toBe('Data successfully fetched');
});

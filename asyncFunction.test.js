



const asyncFunction = require('./asyncFunction');

describe('asyncFunction', () => {
  test('should return the fetched data', async () => {
    const data = await asyncFunction();
    expect(data).toBe('Data successfully fetched');
  });

  test('should throw an error if data fetching fails', async () => {
    await expect(asyncFunction()).rejects.toThrowError('Error fetching data');
  });
});
// math.test.js
const { add, subtract } = require('./math');

describe('Math Functions', () => {
  describe('add', () => {
    test('should correctly add two numbers', () => {
      const result = add(2, 3);
      expect(result).toBe(5);
    });

    test('should handle negative numbers', () => {
      const result = add(-5, -3);
      expect(result).toBe(-8);
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two numbers', () => {
      const result = subtract(5, 3);
      expect(result).toBe(2);
    });

    test('should handle negative numbers', () => {
      const result = subtract(-5, -3);
      expect(result).toBe(-2);
    });
  });
});

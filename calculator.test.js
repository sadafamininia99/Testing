const calculator = require('./calculator');

describe('calculator', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    test('should return zero when adding zero to a number', () => {
      const result = calculator.add(10, 0);
      expect(result).toBe(10);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    test('should return the same number when subtracting zero', () => {
      const result = calculator.subtract(10, 0);
      expect(result).toBe(10);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      const result = calculator.multiply(4, 5);
      expect(result).toBe(20);
    });

    test('should return zero when multiplying by zero', () => {
      const result = calculator.multiply(10, 0);
      expect(result).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrowError('Division by zero is not allowed');
    });
  });
});

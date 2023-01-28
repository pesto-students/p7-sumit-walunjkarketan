const mathOperations = require('./jest.index');

describe("Calculator tests", () => {

    test('adding 1 + 2 should return 3', () => {
        const result = mathOperations.sum(1,2)
      expect(result).toBe(3);
    });

    test('subtracting 2 from 10 should return 8', () => {
        const result = mathOperations.diff(10,2)
      expect(result).toBe(8);
    });

    test('multiplying 2 and 8 should return 16', () => {
        const result = mathOperations.product(2,8)
      expect(result).toBe(16);
    });


   })
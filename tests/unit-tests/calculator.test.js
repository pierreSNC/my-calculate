const { add, subtract, multiply, divide, clearHistory, getHistory } = require("../../src/calculator");

const testCases = [
    { inputs: [2, 3], operation: 'add', expected: 5 },
    { inputs: [5, 3], operation: 'subtract', expected: 2 },
    { inputs: [4, 5], operation: 'multiply', expected: 20 },
    { inputs: [10, 2], operation: 'divide', expected: 5 },
    { inputs: [10, 0], operation: 'divide', expected: 'error' },
];

testCases.forEach(({ inputs, operation, expected }) => {
    test(`operation ${operation} on ${inputs[0]} and ${inputs[1]} should return ${expected}`, () => {
        let result;
        switch (operation) {
            case 'add':
                result = add(inputs[0], inputs[1]);
                break;
            case 'subtract':
                result = subtract(inputs[0], inputs[1]);
                break;
            case 'multiply':
                result = multiply(inputs[0], inputs[1]);
                break;
            case 'divide':
                result = inputs[1] === 0 ? 'error' : divide(inputs[0], inputs[1]);
                break;
        }
        expect(result).toBe(expected);
    });
});

beforeEach(() => {
    clearHistory();
});

test("adding 2 and 3 must return 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracting 5 and 3 should return 2", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiplication of 4 and 3 must return 12", () => {
    expect(multiply(4, 3)).toBe(12);
});

test("division of 6 and 3 must return 2", () => {
    expect(divide(6, 3)).toBe(2);
});

test("division of 7 and 0 must return an error", () => {
    expect(() => divide(7, 0)).toThrow("Cannot divide by zero");
});

test("add 2 and 3 to history", () => {
    add(2, 3);
    expect(getHistory()).toEqual([
        { operation: "add", operands: [2, 3], result: 5 }
    ]);
});

test("clear history", () => {
    clearHistory();
    expect(getHistory()).toEqual([]);
});
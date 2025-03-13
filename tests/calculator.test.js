const { add, subtract, multiply, divide } = require("../src/calculator");

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
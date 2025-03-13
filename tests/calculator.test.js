const { add, subtract  } = require("../src/calculator");

test("adding 2 and 3 must return 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracting 5 and 3 should return 2", () => {
    expect(subtract(5, 3)).toBe(2);
});

const { add } = require("../src/calculator");

test("adding 2 and 3 must return 5", () => {
    expect(add(2, 3)).toBe(5);
});

let history = [];

function add(a, b) {
    const result = a + b;
    history.push({ operation: "add", operands: [a, b], result });
    return result;
}

function subtract(a, b) {
    const result = a - b;
    history.push({ operation: "subtract", operands: [a, b], result });
    return result;
}

function multiply(a, b) {
    const result = a * b;
    history.push({ operation: "multiply", operands: [a, b], result });
    return result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    const result = a / b;
    history.push({ operation: "divide", operands: [a, b], result });
    return result;
}

function clearHistory() {
    history = [];
}

function getHistory() {
    return history;
}

module.exports = { add, subtract, multiply, divide, clearHistory, getHistory };

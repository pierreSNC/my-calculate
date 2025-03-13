let currentInput = '';
let currentOperation = null;
let previousResult = null;
let history = [];

function appendDigit(digit) {
    currentInput += digit;
    document.getElementById('result').textContent = currentInput;
}

function performOperation(operation) {
    if (currentInput === '') return;

    if (previousResult !== null && currentOperation === null) {
        currentInput = previousResult.toString();
    }

    currentInput += ` ${operation} `;
    currentOperation = operation;
    document.getElementById('result').textContent = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (result === undefined || result === null) {
            throw new Error('Invalid result');
        }
        document.getElementById('result').textContent = result;
        addToHistory(currentInput, result);
        previousResult = result;
        currentInput = result.toString();
        currentOperation = null;
    } catch (e) {
        document.getElementById('result').textContent = 'Erreur';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousResult = null;
    document.getElementById('result').textContent = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        document.getElementById('result').textContent = '0';
    } else {
        document.getElementById('result').textContent = currentInput;
    }
}

function addToHistory(expression, result) {
    const historyItem = {
        expression: expression,
        result: result
    };
    history.push(historyItem);
    updateHistoryUI();
}

function updateHistoryUI() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'history-item');
        listItem.textContent = `${item.expression} = ${item.result}`;
        listItem.onclick = () => { loadFromHistory(item); };
        historyList.appendChild(listItem);
    });
}

function loadFromHistory(item) {
    currentInput = item.expression;
    document.getElementById('result').textContent = currentInput;
    previousResult = item.result;
}

function clearHistory() {
    history = [];
    updateHistoryUI();
}

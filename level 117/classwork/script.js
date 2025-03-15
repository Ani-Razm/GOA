class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

const operation = document.querySelector('select');
const answer = document.querySelector('.answer');

operation.addEventListener('input', () => {
    let v = operation.value;
    let n1 = Number(document.querySelector('#n1').value);
    let n2 = Number(document.querySelector('#n2').value);

    if (v == '+') {
        answer.textContent = Calculator.add(n1, n2)
    } else if (v == "/") {
        answer.textContent = Calculator.divide(n1, n2)
    } else if (v == "*") {
        answer.textContent = Calculator.multiply(n1, n2)
    } else if (v == "-") {
        answer.textContent = Calculator.subtract(n1, n2)
    }
})
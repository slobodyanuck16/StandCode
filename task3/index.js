'use strict';

function calculator(a,b) {
    console.log(this);

    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
}

const result = calculator.call({operation: '+'}, 7);
console.log(result);

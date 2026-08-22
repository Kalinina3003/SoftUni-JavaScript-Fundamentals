// Task: Postfix Notation
// Description: Receive numbers and arithmetic operators in postfix notation.
// Save numbers and apply each operator to the two most recently saved operands.
// Print the final result or an error message.

function jansNotation(arr) {
    let stack = [];

    for (let element of arr) {

        if (typeof element === 'number') {
            stack.push(element);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            let rightOperand = stack.pop();
            let leftOperand = stack.pop();

            let result;

            switch (element) {
                case '+':
                    result = leftOperand + rightOperand;
                    break;
                case '-':
                    result = leftOperand - rightOperand;
                    break;
                case '*':
                    result = leftOperand * rightOperand;
                    break;
                case '/':
                    result = leftOperand / rightOperand;
                    break;
            }

            stack.push(result);
        }
    }

    if (stack.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(stack[0]);
    }
}
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([31, 2, '+', 11, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
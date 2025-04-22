let buttons = document.querySelectorAll('input[type="button"]');
let result = document.querySelector('#result');

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let buttonText = e.target.value;

        if (buttonText !== '=' && buttonText !== 'c') {
            result.value += buttonText;
        } else if (buttonText === 'c') {
            result.value = '';
        } else {
            computeResult(result.value);
        }
    });
});

function computeResult(expression) {
    let operators = ['+', '-', '*', '/'];

    for (let operator of operators) {
        if (expression.includes(operator)) {
            let parts = expression.split(operator);
            let val1 = parseFloat(parts[0]);
            let val2 = parseFloat(parts[1]);

            switch (operator) {
                case '+':
                    result.value = val1 + val2;
                    break;
                case '-':
                    result.value = val1 - val2;
                    break;
                case '*':
                    result.value = val1 * val2;
                    break;
                case '/':
                    result.value = val1 / val2;
                    break;
                default:
                    return;
            }
            return;
        }
    }
    result.value = 'Error';
}

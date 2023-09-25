const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equal = document.getElementById('equal');
let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            currentExpression = '';
            display.value = '';
        } else if (value === 'DE') {
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
        } else {
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});


equal.addEventListener('click', () => {
    try {
        if (!isEmpty(currentExpression)) {
            currentExpression = eval(currentExpression);
            display.value = currentExpression;
        } else {
            display.value = '';
        }
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
});

function isEmpty(str) {
    return !str.trim(); 
}

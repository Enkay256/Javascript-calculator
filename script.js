const num1 = parseFloat(prompt('Enter your first number: '));

const operator = prompt('Enter a basic operator: (+, -, *, / )');

const num2 = parseFloat(prompt('Enter your second number'));


let result = 0;
if (isNaN(num1) || isNaN(num2))  {
    alert('Invalid! try again'); }

else {
    if (operator == '+'){
        result = num1 + num2
    }

    else if (operator == '-'){
        result = num1 - num2
    }

    else if (operator == '*'){
        result = num1 * num2
    }

    else if (operator == '/'){
        result = num1 / num2
    }
    alert(num1 + ' '+ operator + ' '+ num2 +  ' = ' + result)
}




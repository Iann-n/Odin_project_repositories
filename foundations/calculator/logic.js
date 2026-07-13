function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a,b)
{
    return a / b;
}

function operator(num1, op, num2)
{
    if (op == "+")
    {
        return add(num1,num2);
    }

    else if (op == "-")
    {
        return subtract(num1, num2);
    }

    else if (op == "*")
    {
        return multiply(num1,num2);
    }

    else if (op == "/")
    {
        return divide(num1, num2);
    }
}

// declaring variables
let display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains('clear'))
        {
            clearHandle();
        }

        else if (element.classList.contains('delete'))
        {
            deleteHandle();
        }

        else if (element.classList.contains('operator'))
        {
            operatorHandle(element.textContent);
        }

        else if (element.classList.contains("equals"))
        {
            const expression = display.textContent;
            const operatorIndex = expression.search(/[+\-×÷]/);
            const num1 = Number(expression.slice(0, operatorIndex));
            const operatorMap = {
                "+": "+",
                "−": "-",
                "×": "*",
                "÷": "/"
            };
            const op = operatorMap[expression[operatorIndex]];
            const num2 = Number(expression.slice(operatorIndex + 1));
            display.textContent = operator(num1, op, num2);
        }
        else 
        {
            numberHandle(element.textContent);
        }
    })
})

// building the mini dispatch functions

function clearHandle()
{
    display.textContent = "";
}

function deleteHandle()
{
    display.textContent = display.textContent.slice(0, -1);
}

function operatorHandle(op)
{
    if (! /\d/.test(display.textContent))
    { 
        return 
    }

    let lastChar = display.textContent.at(-1);
    if (["+", "−", "×", "÷"].includes(lastChar)) {
        deleteHandle();
    }

    display.textContent += op;

}

function numberHandle(num)
{
    display.textContent += num;
}
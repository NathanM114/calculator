const numbers = document.querySelectorAll('.number');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.subtract');
const multBtn = document.querySelector('.multiply');
const divBtn = document.querySelector('.divide');
const equalBtn = document.querySelector('.equals');
const backBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const current = document.querySelector('.current-result');
const previous = document.querySelector('.previous-result');

var operation = undefined;

function calculate(){
    //Parse equation in display and show result
    let result = '';
    const a = parseFloat(previous.textContent.replaceAll(',', ''));
    const b = parseFloat(current.textContent.replaceAll(',', ''));
    if (isNaN(a) || isNaN(b)){
        return;
    }
    switch(operation){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '÷':
            if (b == 0){
                result = 'ERROR';
                break;
            }
            else {
                result = a / b;
                break;
            }
        default:
            return;
    }
    previous.textContent = '';
    operation = undefined;
    parseNum(result.toString());
}

function setOperation(op){
    const operations = {
        'add': '+',
        'sub': '-',
        'mult': 'x',
        'div': '÷'
    };
    if (!current.textContent){
        if (op = 'sub'){
            current.textContent = '-';
            return;
        }
        else {
            return;
        }
    }
    else if (previous.textContent){
        calculate();
    }
    operation = operations[op];
    previous.textContent = `${current.textContent} ${operation}`;
    current.textContent = '';
}

function buttonInput(event){
    //Add to current display from button input
    current.textContent + event.target.textContent;
    parseNum(current.textContent + event.target.textContent);
}

function backspace(){
    //Remove last character from current display
    parseNum(current.textContent.slice(0, -1));
}

function clear(){
    //Clear display
    current.textContent = '';
    previous.textContent = '';
    operation = undefined;
}

function parseNum(num){
    num = num.replaceAll(',', '');
    displayNum = parseFloat(num).toLocaleString('en-US');
    if (isNaN(parseFloat(displayNum))){
        current.textContent = '';
    }
    else {
        current.textContent = displayNum;
    }
}

//Add event listeners to buttons
numbers.forEach((button) =>{
    button.addEventListener('click', buttonInput);
});
addBtn.addEventListener('click', setOperation('add'));
subBtn.addEventListener('click', setOperation('sub'));
multBtn.addEventListener('click', setOperation('mult'));
divBtn.addEventListener('click', setOperation('div'));
clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', backspace);
equalBtn.addEventListener('click', calculate);

//Handle keypress
function keyInput(event){
    if (event.shiftKey){
        switch (event.keyCode){
            case 56:
                setOperation('mult');
                break;
            case 61:
                setOperation('add');
                break;
            default:
                break;
        }
        return;
    }
    switch (event.keyCode){
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
            parseNum(current.textContent + String.fromCharCode(event.keyCode));
            break;
        case 173:
            setOperation('sub');
            break;
        case 191:
            setOperation('div');
            break;
        case 8:
            backspace();
            break;
        case 13:
            calculate();
            break;
        case 190:
            if (current.textContent.includes('.')){
                break;
            }
            else {
                current.textContent += '.';
            }
        default:
            break;
    }
}

document.addEventListener('keydown', keyInput);
clear();
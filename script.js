const numbers = document.querySelectorAll('.number');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.subtract');
const multBtn = document.querySelector('.multiply');
const divBtn = document.querySelector('.divide');
const equalBtn = document.querySelector('.equals');
const backBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const display = document.querySelector('.display');
const solution = document.querySelector('.solution');

var displayText = '';

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}  

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(str){
    
}

function input(event){
    displayText += event.target.textContent;
    updateDisplay()
}

function backspace(){
    displayText = displayText.slice(0, -1);
    updateDisplay();
}

function clear(){
    displayText = '';
    updateDisplay();
}

function updateDisplay(){
    display.textContent = displayText;
}

numbers.forEach((button) =>{
    button.addEventListener('click', input);
});
addBtn.addEventListener('click', input);
subBtn.addEventListener('click', input);
multBtn.addEventListener('click', input);
divBtn.addEventListener('click', input);
clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', backspace);
equalBtn.addEventListener('click', operate);s
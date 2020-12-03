// select elements
let integers = document.querySelectorAll('.integer');
let operators = document.querySelectorAll('.operator');
let screen = document.querySelector('input');

// input variables
let num;
let oper;

//store clicked value in either num
integers.forEach(int => int.addEventListener('click', e => {
    e.preventDefault();
    screen.value = e.target.value;
    num += e.target.value;
}));
operators.forEach(op => op.addEventListener('click', (e) => {
    e.preventDefault();
    screen.value = e.target.value;
    oper = e.target.value
}))












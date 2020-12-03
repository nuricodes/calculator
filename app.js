// select elements
let integers = document.querySelectorAll('.integer');
let operators = document.querySelectorAll('.operator');
let screen = document.querySelector('input');

// input variables
let num1;
let num2;

//log values
integers.forEach(int => int.addEventListener('click', (e) => console.log(e.target.value)))
operators.forEach(op => op.addEventListener('click', (e) => console.log(e.target.value)))










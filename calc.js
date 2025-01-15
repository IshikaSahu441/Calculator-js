import {subtraction} from './subtraction.js';

const num1 = prompt("enter first number: ")
const num2 = prompt("enter second number: ")

const ch = prompt("enter you choice: 1,2,3,4")

switch (ch) {
    case 1:
        console.log(subtraction(num1,num2))
}

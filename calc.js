import { subtraction } from './subtraction.js';

const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const ch = Number(prompt("Enter your choice: 1, 2, 3, 4"));

switch (ch) {
  case 1:
    console.log(subtraction(num1, num2));
    break;
  default:
    console.log("Invalid choice");
}

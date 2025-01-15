import { subtraction } from './subtraction.js';
import { multiplication } from './multiplication.js';
import { addition } from './addition.js';

document.getElementById('t4').addEventListener('click', () => {
  const num1 = Number(document.getElementById('t1').value);
  const num2 = Number(document.getElementById('t2').value);
  const ch = Number(document.getElementById('t3').value);

  const resultElement = document.getElementById('t5');

  switch (ch) {
    case 1:
      resultElement.textContent = `Result: ${subtraction(num1, num2)}`;
      break;
    case 2:
      resultElement.textContent = `Result: ${multiplication(num1, num2)}`;
      break;
    case 3:
      resultElement.textContent = `Result: ${addition(num1, num2)}`;
      break;
    default:
      resultElement.textContent = "Invalid choice";
  }
});

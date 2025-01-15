import { subtraction } from './subtraction.js';
import { divion } from './division.js';

document.getElementById('t4').addEventListener('click', () => {
  const num1 = Number(document.getElementById('t1').value);
  const num2 = Number(document.getElementById('t2').value);
  const ch = Number(document.getElementById('t3').value);

  const resultElement = document.getElementById('t5');

  switch (ch) {
    case 1:
      resultElement.textContent = `Result: ${subtraction(num1, num2)}`;
      break;
    case 4:
      resultElement.textContent = `Result: ${division(num1, num2)}`;
      break;
    default:
      resultElement.textContent = "Invalid choice";
  }
});

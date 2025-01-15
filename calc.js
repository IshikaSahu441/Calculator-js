import { subtraction } from './subtraction.js';

document.getElementById('calculate').addEventListener('click', () => {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const ch = Number(document.getElementById('choice').value);

  const resultElement = document.getElementById('result');

  switch (ch) {
    case 1:
      resultElement.textContent = `Result: ${subtraction(num1, num2)}`;
      break;
    default:
      resultElement.textContent = "Invalid choice";
  }
});

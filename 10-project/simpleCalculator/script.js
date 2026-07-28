const result = document.getElementById("result");
function calculate(operation) {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(operation);

  switch (operation) {
    case "+":
      result.textContent = firstNumber + secondNumber;
      break;
    case "-":
      result.textContent = firstNumber - secondNumber;
      break;

    case "x":
      result.textContent = firstNumber * secondNumber;
      break;

    case "/":
      result.textContent = firstNumber / secondNumber;
      break;

    default:
      break;
  }
}

function clearData() {
  document.getElementById("first-number").value = "";
  const secondNumber = (document.getElementById("second-number").value = "");
  result.textContent = 0;
}

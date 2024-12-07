const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Evaluate the expression
    const result = eval(display.value);
    if (isNaN(result)) {
      throw new Error("Invalid calculation");
    }
    display.value = result;
  } catch (error) {
    // Handle any errors
    alert("Error: Invalid Expression");
    clearDisplay();
  }
}

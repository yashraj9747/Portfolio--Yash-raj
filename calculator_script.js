let display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function appendFunc(func) {
  display.innerText += func + "(";
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    let expression = display.innerText;

    // Replace math symbols with JavaScript equivalents
    expression = expression.replace(/π/g, "Math.PI");
    expression = expression.replace(/e/g, "Math.E");
    expression = expression.replace(/√/g, "Math.sqrt");
    expression = expression.replace(/\^/g, "**");

    // Functions
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    expression = expression.replace(/log\(/g, "Math.log10(");

    // Evaluate
    let result = eval(expression);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

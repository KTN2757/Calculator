const InputField = document.getElementById("InputField");
function appendToDisplay(input) {
  if (InputField.value == "undefined") {
    InputField.value = "";
    InputField.value += input;
  } else {
    InputField.value += input;
    console.log(input)
  }
}

function Calculate() {
  if (InputField.value.includes("sin(")) {
    // InputField.value.replace("sin(", "");
    console.log(InputField.value.replace("sin(", ""));
    // InputField.value = Math.sin(InputField.value - "sin(");
  }
  if (InputField.value.includes("*₁₀")) {
    InputField.value = InputField.value.replace("*₁₀", "*10**");
  }
  if (InputField.value.incldes("xⁿ")) {
    InputField.value = InputField.value.replace("xⁿ", "**")
  }
  try {
    PREANS = InputField.value;
    InputField.value = eval(InputField.value);
    ANS = InputField.value;
  } catch (err) {
    alert("Invalid Input");
  }
}
function Clear() {
  InputField.value = "";
}
function Backspace() {
  InputField.value = InputField.value.substring(0, InputField.value.length - 1);
}
function showAnswer() {
  if (PREANS == "undefined" && ANS == "undefined") {
    alert(
      "Both the ANS and PREANS are undefined. You cannot use any of them for now.",
    );
  } else if (ANS == "undefined") {
    ANS = PREANS;
    InputField.value += "ANS";
  } else {
    InputField.value += "ANS";
  }
}

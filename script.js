const InputField = document.getElementById("InputField");
function appendToDisplay(input) {
  InputField.value += input;
  console.log(InputField.value);
}
function Calculate() {
  try {
    InputField.value = eval(InputField.value);
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

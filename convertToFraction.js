count = 0;
function convertToFraction() {
  if (count == 0) {
    const tolerance = 1.0e-6;
    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let b = InputField.value;
    do {
      let a = Math.floor(b);
      let aux = h1;
      h1 = a * h1 + h2;
      h2 = aux;
      aux = k1;
      k1 = a * k1 + k2;
      k2 = aux;
      b = 1 / (b - a);
    } while (
      Math.abs(InputField.value - h1 / k1) > InputField.value * tolerance
    );
    InputField.value = h1 + "/" + k1;
    count += 1;
  } else {
    console.log(count);
    const { calculate } = requre("./script.js");
    calculate();
  }
}

var slider = document.getElementById("how-long");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

const formDom = document.querySelector("#password-form");
const displayDom = document.querySelector("#password-display");
const copybtnDOM = document.querySelector("#copy");
const lengthDOM = document.querySelector("#how-long");
const upperDOM = document.querySelector("#uppercase");
const lowerDOM = document.querySelector("#lowercase");
const numbersDOM = document.querySelector("#numbers");
const symbolsDOM = document.querySelector("#symbols");
const generatebtnDOM = document.querySelector("#generate");
const resetbtnDOM = document.querySelector("#reset");

const passwordArray = (num1, num2) => {
  const array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);

  }
  return array;

};

const uppercase_array = passwordArray(65, 90);
const lowercase_array = passwordArray(97, 122);
const number_array = passwordArray(48, 57);
const symbol_array = passwordArray(33, 47);

generatebtnDOM.addEventListener("click", (e) => {
  const passLength = lengthDOM.value;
  const includeUppercase = upperDOM.checked;
  const includeLowercase = lowerDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    passLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  displayDom.innerHTML = password;
  document.getElementById("password-display").style.height = "auto";
  document.getElementById("password-display").style.width = "auto";
});

const generatePassword = (
  passLength,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = lowercase_array;
  if (includeUppercase) charCodes = charCodes.concat(uppercase_array);
  if (includeSymbols) charCodes = charCodes.concat(symbol_array);
  if (includeNumbers) charCodes = charCodes.concat(number_array);
  const passwordCharacters = [];
  for (let i = 0; i < passLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("")

};

copybtnDOM.addEventListener("click", (e) => {
  const textarea = document.createElement("textarea");
  const passwordToCopy = displayDom.innerHTML;
  if (!passwordToCopy) return;
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied to Clipboard");
});








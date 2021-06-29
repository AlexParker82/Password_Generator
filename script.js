var slider = document.getElementById("how-long");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

const formDom = document.querySelector("#password-form");
const displayDom = document.querySelector("#password-display");
const copybtnDOM = document.querySelector("#copy");
const  lengthDOM = document.querySelector("#how-long");
const upperDOM = document.querySelector("#uppercase");
const lowerDOM = document.querySelector("#lowercase");
const numbersDOM = document.querySelector("#numbers");
const symbolsDOM = document.querySelector("#symbols");
const generatebtnDOM = document.querySelector("#generate");
